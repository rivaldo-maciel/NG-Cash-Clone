import Transaction from '../database/models/Transaction';
import Controllers from './Controllers';
import ITransactionControllers from './interfaces/ITransactionControllers';

class TransactionControllers extends Controllers<Transaction> implements ITransactionControllers {

}

export default TransactionControllers;

