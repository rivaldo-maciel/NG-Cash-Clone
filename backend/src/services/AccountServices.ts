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

  public async getOne(id: number): Promise<Account> {
    return this.repository.findOne({ where: { id }});
  }

  public async update(
    id: number,
    alteration: {
      id?: number;
      balance?: number;
    }
  ): Promise<UpdateResult> {
    await this.checkExistence(id);
    return await this.repository.update(id, alteration);
  }

  public async remove(id: number): Promise<DeleteResult> {
    await this.checkExistence(id);
    return await this.repository.delete(id);
  }
}

export default AccountServices;
