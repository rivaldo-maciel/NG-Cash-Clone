import { UpdateResult, DeleteResult } from 'typeorm';
import Account from '../database/models/Account';
import IAccountServices from './interfaces/IAccountServices';
import Services from './Services';

class AccountServices extends Services<Account> implements IAccountServices {
  public async create(entity: Account): Promise<Account> {
    return await this.repository.save(entity);
  }
  public async getAll(): Promise<Account[]> {
    return await this.repository.find();
  }
  public async update(
    id: number,
    alteration: {
      id?: number;
      balance?: string;
    }
  ): Promise<UpdateResult> {
    return await this.repository.update(id, alteration);
  }
  public async remove(id: number): Promise<DeleteResult> {
    return await this.repository.delete(id);
  }
}

export default AccountServices;
