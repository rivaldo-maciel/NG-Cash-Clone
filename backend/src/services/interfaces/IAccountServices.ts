import Account from '../../database/models/Account';
import IServices from './IServices';

interface IAccountServices extends IServices<Account> {
  
}

export default IAccountServices;
