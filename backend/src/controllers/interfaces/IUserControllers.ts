import User from '../../database/models/User';
import IControllers from './IControllers';

interface IUserControllers extends IControllers<User> {}

export default IUserControllers;