import { UpdateResult } from 'typeorm';
import { Transaction } from '../../database/models';
import Account from '../../database/models/Account';
import IServices from './IServices';

interface IAccountServices extends IServices<Account> {
  transfer(value: number, accountId: number, creditedUserName: string): Promise<UpdateResult>;
  saveTransaction(value: number, accountId: number, creditedAccountId: number): Promise<Transaction>;
}

export default IAccountServices;
