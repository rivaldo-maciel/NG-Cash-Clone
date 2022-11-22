import {
  UpdateResult,
  DeleteResult,
  Repository,
} from 'typeorm';
import { Transaction, User } from '../database/models';
import Account from '../database/models/Account';
import DepositTypeError from '../errors/DepositTypeError';
import InsufficientResourcesError from '../errors/InsufficientResourcesError';
import UserNotFoundError from '../errors/UserNotFoundError';
import YourselfTransactionError from '../errors/YourselfTransactionError';
import IAccountServices from './interfaces/IAccountServices';
import Services from './Services';

class AccountServices
  extends Services<Account, Transaction, User>
  implements IAccountServices
{
  protected repositorySupport: Repository<Transaction>;
  protected secondRepositorySupport: Repository<User>;

  public async create(entity: Account): Promise<Account> {
    this.schema.parse(entity);
    return await this.repository.save(entity);
  }

  public async getAll(): Promise<Account[]> {
    return await this.repository.find();
  }

  public async getOne(id: number, userId: number): Promise<Account> {
    this.checkUserAuth(id, userId);
    return this.repository.findOne({ where: { id } });
  }

  public async update(
    id: number,
    alteration: {
      id?: number;
      balance?: number;
    },
    userId: number
  ): Promise<UpdateResult> {
    await this.checkExistence(id);
    this.checkUserAuth(id, userId);
    return await this.repository.update(id, alteration);
  }

  public async remove(id: number, userId: number): Promise<DeleteResult> {
    await this.checkExistence(id);
    this.checkUserAuth(id, userId);
    return await this.repository.delete(id);
  }

  public async transfer(
    value: number,
    accountId: number,
    creditedUserName: string
  ): Promise<UpdateResult> {
    this.schemaSupport.parse({ value, creditedUserName });
    const positiveValue = value < 0 ? value * (-1) : value;
    const creditedUser = await this.secondRepositorySupport.findOne({
      where: { userName: creditedUserName }
    });
    if (!creditedUser) {
      throw new UserNotFoundError();
    }
    const creditedAccount = await this.repository.findOne({
      where: { id: creditedUser.accountId }
    });
    const debitedAccount = await this.repository.findOne({
      where: { id: accountId }
    });
    await this.transactionValidate(
      accountId,
      creditedAccount.id,
      value,
      Number(debitedAccount.balance),
    );
    const finalBalanceDebited = Number(debitedAccount.balance) - positiveValue;
    const finalBalanceCredited = Number(creditedAccount.balance) + positiveValue;
    await this.repository.update(accountId, {
      ...debitedAccount,
      balance: finalBalanceDebited
    });
    const transferUpdateResult = await this.repository.update(
      creditedAccount.id,
      { ...creditedAccount, balance: finalBalanceCredited }
    );
    await this.saveTransaction(positiveValue, accountId, creditedAccount.id);
    return transferUpdateResult;
  }

  public async transactionValidate(
    accountId: Number,
    creditedAccountId: Number,
    value: number,
    debitedAccountBalance: number,
  ): Promise<void> {
    const positiveValue = value < 0 ? value * (-1) : value;
    if (accountId === creditedAccountId) {
      throw new YourselfTransactionError();
    }
    if (typeof value !== 'number') {
      throw new DepositTypeError();
    }
    if (debitedAccountBalance - positiveValue < 0) {
      throw new InsufficientResourcesError();
    }
  }

  public async saveTransaction(
    value: number,
    accountId: number,
    creditedAccountId: number
  ): Promise<Transaction> {
    return await this.repositorySupport.save({
      debitedAccountId: accountId,
      creditedAccountId,
      value
    });
  }
}

export default AccountServices;
