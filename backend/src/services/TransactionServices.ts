import {
  UpdateResult,
  DeleteResult,
  Repository,
  DataSource,
  EntityTarget
} from 'typeorm';
import { z, ZodRawShape } from 'zod';
import { User } from '../database/models';
import Transaction from '../database/models/Transaction';
import TransactionType from '../enums/TransactionType';
import { FormattedTransaction } from '../types/transaction';
import ITransaction from './interfaces/ITransactionServices';
import IUserServices from './interfaces/IUserServices';
import Services from './Services';

class TransactionServices
  extends Services<Transaction>
  implements ITransaction
{
  protected userServices: IUserServices;

  constructor(
    dataSource: DataSource,
    model: EntityTarget<Transaction>,
    schema: z.ZodObject<ZodRawShape>,
    userServices: IUserServices
  ) {
    super(dataSource, model, schema);
    this.userServices = userServices;
  }

  public async create(
    entity: Transaction,
    userId: number
  ): Promise<Transaction> {
    this.schema.parse(entity);
    this.checkUserAuth(entity.debitedAccountId, userId);
    return await this.repository.save(entity);
  }

  public async getAll(): Promise<Transaction[]> {
    return await this.repository.find();
  }

  public async getOne(id: number, userId: number): Promise<Transaction> {
    this.checkUserAuth(id, userId);
    return await this.repository.findOne({ where: { id } });
  }

  public async update(
    id: number,
    alteration: {
      id?: number;
      debitedAccountId?: number;
      creditedAccountId?: number;
      value?: number;
      createdAt?: string;
    },
    userId: number
  ): Promise<UpdateResult> {
    await this.checkExistence(id);
    this.checkUserAuth(alteration.debitedAccountId, userId);
    return this.repository.update(id, alteration);
  }

  public async remove(id: number, userId: number): Promise<DeleteResult> {
    await this.checkExistence(id);
    this.checkUserAuth(id, userId);
    return this.repository.delete(id);
  }

  public async getTransactionsByAccountId(
    accountId: number,
    type: TransactionType
  ): Promise<FormattedTransaction[]> {
    const creditedTransactions = await this.repository.find({
      where: { creditedAccountId: accountId }
    });
    const debitedTransactions = await this.repository.find({
      where: { debitedAccountId: accountId }
    });
    const result = {
      all: [...await this.formatTransaction(creditedTransactions), ...await this.formatTransaction(debitedTransactions)],
      cashIn: await this.formatTransaction(creditedTransactions),
      cashOut: await this.formatTransaction(debitedTransactions),
    }
    return result[type];
  }

  public async formatTransaction(
    transactions: Transaction[]
  ): Promise<FormattedTransaction[]> {
    const formattedTransactions = transactions.map(async (transaction) => {
      return {
        creditedUserName: await this.userServices.getUserNameByAccountId(
          transaction.creditedAccountId
        ) as unknown as Promise<string>,
        debitedUserName: await this.userServices.getUserNameByAccountId(
          transaction.debitedAccountId
        ) as unknown as Promise<string>,
        value: Number(transaction.value),
        createdAt: this.formatDate(transaction.createdAt)
      };
    });

    const promise = await Promise.all(formattedTransactions) as unknown as FormattedTransaction[];
    return promise;
  }

  public formatDate(date: Date): string {
    const dateString = date.toISOString();
    const splittedDate = dateString.split('T');
    return splittedDate[0];
  }
}

export default TransactionServices;
