import Transaction from '../../database/models/Transaction';
import TransactionType from '../../enums/TransactionType';
import IServices from './IServices';

interface ITransactionServices extends IServices<Transaction> {
  getTransactionsByAccountId(
    accountId: number,
    type: TransactionType
  ): Promise<Transaction[]>
}

export default ITransactionServices;
