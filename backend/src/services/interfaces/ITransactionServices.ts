import Transaction from '../../database/models/Transaction';
import TransactionType from '../../enums/TransactionType';
import { FormattedTransaction } from '../../types/transaction';
import IServices from './IServices';

interface ITransactionServices extends IServices<Transaction> {
  getTransactionsByAccountId(
    accountId: number,
    type: TransactionType
  ): Promise<FormattedTransaction[]>
}

export default ITransactionServices;
