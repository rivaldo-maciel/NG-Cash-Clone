import { RequestHandler, Request, Response, NextFunction } from 'express';
import IAccountControllers from '../controllers/interfaces/IAccountControllers';
import { Account } from '../database/models';
import { RequestWithUserId } from '../types/express';
import GenericRouter from './GenericRouter';

class AccountRouter extends GenericRouter<Account> {
  protected controller: IAccountControllers;

  public createRoutes(): void {
    this.createPostRoute(this.authMiddleware);
    this.createGetAllRoute(this.authMiddleware);
    this.createTransferRoute(this.authMiddleware);
    this.createGetByIdRoute(this.authMiddleware);
    this.createPutRoute(this.authMiddleware);
    this.createDeleteRoute(this.authMiddleware);
  }

  public createTransferRoute(authMiddleware: RequestHandler | void): void {
    this._router.put(
      '/transfer',
      (req: Request, res: Response, next: NextFunction) => {
        authMiddleware ? authMiddleware(req, res, next) : next();
      },
      (req: RequestWithUserId, res: Response, next: NextFunction) => {
        this.controller.transfer(req, res, next);
      }
    );
  }
}

export default AccountRouter;
