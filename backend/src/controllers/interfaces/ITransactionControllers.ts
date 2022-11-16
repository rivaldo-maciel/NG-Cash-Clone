import Transaction from '../../database/models/Transaction';
import IControllers from './IControllers';

interface ITransactionControllers extends IControllers<Transaction> {}

export default ITransactionControllers;