import User from '../../database/models/User';
import IServices from './IServices';

interface IUserServices extends IServices<User> {

}

export default IUserServices;
