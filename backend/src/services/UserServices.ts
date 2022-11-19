import { UpdateResult, DeleteResult, Repository } from 'typeorm';
import Account from '../database/models/Account';
import User from '../database/models/User';
import UserNameDuplicateError from '../errors/UserNameDuplicateError';
import IUserServices from './interfaces/IUserServices';
import Services from './Services';
import * as bcrypt from 'bcrypt';

class UserServices extends Services<User, Account> implements IUserServices {
  protected repositorySupport: Repository<Account>;

  public async create(entity: User): Promise<User> {
    this.schema.parse(entity);
    await this.checkUserNameExistence(entity.userName);
    const hashedPassword = await this.hashPassword(entity.password);
    const createdUser = await this.repository.save({ ...entity, accountId: 0, password: hashedPassword });
    const { id: accountId } = await this.repositorySupport.save({ balance: 100 });
    await this.repository.update(createdUser.id, { accountId });
    return { id: createdUser.id, userName: createdUser.userName, accountId } as User;
  }

  public async getAll(): Promise<User[]> {
    return await this.repository.find();
  }

  public async getOne(id: number, userId: number): Promise<User> {
    this.checkUserAuth(id, userId);
    return this.repository.findOne({ where: { id }});
  }

  public async update(
    id: number,
    alteration: {
      id?: number;
      userName?: string;
      password?: string;
      accountId?: number;
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
    return this.repository.delete(id);
  }

  public async checkUserNameExistence(userName: string): Promise<void> {
    const user = await this.repository.findOne({ where: { userName } });
    if (user) throw new UserNameDuplicateError();
  }

  public async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  }
}

export default UserServices;
