import { Response, NextFunction } from 'express';
import Transaction from '../database/models/Transaction';
import TransactionType from '../enums/TransactionType';
import ITransactionServices from '../services/interfaces/ITransactionServices';
import { RequestWithUserId } from '../types/express';
import Controllers from './Controllers';
import ITransactionControllers from './interfaces/ITransactionControllers';

class TransactionControllers
  extends Controllers<Transaction>
  implements ITransactionControllers
{
  protected services: ITransactionServices;
  public async getTransactionsByAccountId(
    req: RequestWithUserId,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      const { type } = req.query;
      const user = req.user;
      const transactions = await this.services.getTransactionsByAccountId(
        user.accountId,
        type as unknown as TransactionType
      );
      return res.status(200).json(transactions);
    } catch (err: unknown) {
      next(err);
    }
  }
}

export default TransactionControllers;
