import { UpdateResult } from 'typeorm';
import Account from '../../database/models/Account';
import IServices from './IServices';

interface IAccountServices extends IServices<Account> {
  transfer(value: number, accountId: number, creditedAccountId: number): Promise<UpdateResult>;
  deposit(value: number, accountId: number): Promise<UpdateResult>;
}

export default IAccountServices;
