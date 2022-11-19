import { DataSource, EntityTarget, Repository } from 'typeorm';
import { z, ZodRawShape } from 'zod';
import { User } from '../database/models';
import UserNotFoundError from '../errors/UserNotFoundError';
import ILoginServices from './interfaces/ILoginServices';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import WrongLoginFieldsError from '../errors/WrongLoginFieldsError';
import 'dotenv/config';

class LoginServices implements ILoginServices {
  private dataSource: DataSource;
  private repository: Repository<User>;
  private loginSchema: z.ZodObject<ZodRawShape>;

  constructor(
    dataSource: DataSource,
    userModel: EntityTarget<User>,
    loginSchema: z.ZodObject<ZodRawShape>
  ) {
    this.dataSource = dataSource;
    this.repository = this.dataSource.getRepository(userModel);
    this.loginSchema = loginSchema;
  }

  public async login(userName: string, password: string): Promise<string> {
    this.loginSchema.parse({ userName, password });
    const user = await this.repository.findOne({ where: { userName }});
    if (!user) {
      throw new UserNotFoundError();
    }
    const isCorrectFields = await bcrypt.compare(password, user.password);
    if (!isCorrectFields) {
      throw new WrongLoginFieldsError();
    }
    const payload = Object.assign({}, user);
    delete payload.password;
    const token = jwt.sign(payload, process.env.JWT_SECRET, { algorithm: 'HS256', expiresIn: '24h' });
    return token;
  }
}

export default LoginServices;
