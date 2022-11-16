import Account from '../database/models/Account';
import Controllers from './Controllers';
import IAccountControllers from './interfaces/IAccountControllers';

class AccountControllers extends Controllers<Account> implements IAccountControllers {

}

export default AccountControllers;