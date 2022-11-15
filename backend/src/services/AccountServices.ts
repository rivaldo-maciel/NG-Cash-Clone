import { UpdateResult, DeleteResult } from 'typeorm';
import Account from '../database/models/Account';
import IAccountServices from './interfaces/IAccountServices';
import Services from './Services';

class AccountServices extends Services<Account> implements IAccountServices {
  public create(entity: Account): Promise<Account> {
    return this.repository.save(entity);
  }
  public getAll(): Promise<Account[]> {
    return this.repository.find();
  }
  public update(
    id: number,
    alteration: {
      id?: number | (() => string);
      balance?: string | (() => string);
    }
  ): Promise<UpdateResult> {
    return this.repository.update(id, alteration);
  }
  public remove(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}

export default AccountServices;
