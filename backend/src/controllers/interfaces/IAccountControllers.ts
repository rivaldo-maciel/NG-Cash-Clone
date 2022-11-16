import Account from '../../database/models/Account';
import IControllers from './IControllers';

interface IAccountControllers extends IControllers<Account> {}

export default IAccountControllers;