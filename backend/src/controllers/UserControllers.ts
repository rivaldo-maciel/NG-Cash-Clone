import User from '../database/models/User';
import Controllers from './Controllers';
import IUserControllers from './interfaces/IUserControllers';

class UserControllers extends Controllers<User> implements IUserControllers {
  
}

export default UserControllers;