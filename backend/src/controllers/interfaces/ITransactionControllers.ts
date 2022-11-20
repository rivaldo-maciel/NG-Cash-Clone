import { Response, NextFunction } from 'express';
import Transaction from '../../database/models/Transaction';
import { RequestWithUserId } from '../../types/express';
import IControllers from './IControllers';

interface ITransactionControllers extends IControllers<Transaction> {
  getTransactionsByAccountId(
    req: RequestWithUserId,
    res: Response,
    next: NextFunction
  ): Promise<Response>
}

export default ITransactionControllers;