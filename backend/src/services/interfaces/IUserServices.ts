import User from '../../database/models/User';
import IServices from './IServices';

interface IUserServices extends IServices<User> {
  checkUserNameExistence(userName: string): Promise<void>;
}

export default IUserServices;
