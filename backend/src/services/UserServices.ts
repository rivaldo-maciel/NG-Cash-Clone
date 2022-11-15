import { UpdateResult, DeleteResult, Repository } from 'typeorm';
import Account from '../database/models/Account';
import User from '../database/models/User';
import IUserServices from './interfaces/IUserServices';
import Services from './Services';

class UserServices extends Services<User, Account> implements IUserServices {
  protected repositorySupport: Repository<Account>;

  public async create(entity: User): Promise<User> {
    const createdUser = await this.repository.save({ ...entity, accountId: null });
    const { id: accountId } = await this.repositorySupport.save({ balance: 100 });
    await this.repository.update(createdUser.id, { accountId });
    return { ...createdUser, accountId };
  }

  public async getAll(): Promise<User[]> {
    return await this.repository.find();
  }

  public async getOne(id: number): Promise<User> {
    return this.repository.findOne({ where: { id }});
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

export default UserServices;
