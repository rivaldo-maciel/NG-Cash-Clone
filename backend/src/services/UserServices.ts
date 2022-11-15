import { UpdateResult, DeleteResult } from 'typeorm';
import User from '../database/models/User';
import Services from './Services';

class UserServices extends Services<User> {
  public async create(entity: User): Promise<User> {
    return await this.repository.save(entity);
  }
  public async getAll(): Promise<User[]> {
    return await this.repository.find();
  }
  public async update(
    id: number,
    alteration: {
      id?: number;
      userName?: string;
      password?: string;
      accountId?: number;
    }
  ): Promise<UpdateResult> {
    return await this.repository.update(id, alteration);
  }
  public async remove(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
