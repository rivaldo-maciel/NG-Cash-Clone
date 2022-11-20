import { RequestHandler, Request, Response, NextFunction } from 'express';
import ITransactionControllers from '../controllers/interfaces/ITransactionControllers';
import Transaction from '../database/models/Transaction';
import { RequestWithUserId } from '../types/express';
import GenericRouter from './GenericRouter';

class TransactionRouter extends GenericRouter<Transaction> {
  protected controller: ITransactionControllers;

  public createRoutes(): void {
    this.createPostRoute(this.authMiddleware);
    this.createGetTransactionsByAccountIdRoute(this.authMiddleware);
    this.createGetAllRoute(this.authMiddleware);
    this.createGetByIdRoute(this.authMiddleware);
    this.createPutRoute(this.authMiddleware);
    this.createDeleteRoute(this.authMiddleware);
  }

  public createGetTransactionsByAccountIdRoute(authMiddleware: RequestHandler): void {
    this._router.get('/',
    (req: Request, res: Response, next: NextFunction) => {
      authMiddleware(req, res, next);
    },
      (req: RequestWithUserId, res: Response, next: NextFunction) => {
      this.controller.getTransactionsByAccountId(req, res, next);
    });
  }

}

export default TransactionRouter;
