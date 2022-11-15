import Transaction from '../../database/models/Transaction';
import IServices from './IServices';

interface ITransaction extends IServices<Transaction> {
  
}

export default ITransaction;
