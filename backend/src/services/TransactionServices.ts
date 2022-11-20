import { UpdateResult, DeleteResult } from 'typeorm';
import Transaction from '../database/models/Transaction';
import TransactionType from '../enums/TransactionType';
import ITransaction from './interfaces/ITransactionServices';
import Services from './Services';

class TransactionServices
  extends Services<Transaction>
  implements ITransaction
{
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
  ): Promise<Transaction[]> {
    if (type === 'cashIn') {
      return await this.repository.find({
        where: { creditedAccountId: accountId }
      });
    } else {
      return await this.repository.find({
        where: { debitedAccountId: accountId }
      });
    }
  }
}

export default TransactionServices;
