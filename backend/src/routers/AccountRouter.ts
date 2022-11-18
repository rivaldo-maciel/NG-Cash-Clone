import { NextFunction, Request, RequestHandler, Response } from 'express';
import Account from '../database/models/Account';
import GenericRouter from './GenericRouter';

class AccountRouter extends GenericRouter<Account> {
  public createRoutes(): void {
    this.createPostRoute(this.authMiddleware);
    this.createGetAllRoute(this.authMiddleware);
    this.createGetByIdRoute(this.authMiddleware);
    this.createPutRoute(this.authMiddleware);
    this.createDeleteRoute(this.authMiddleware);
    this.createTransferRoute(this.authMiddleware);
  }

  public createDepositRoute(authMiddleware: RequestHandler): void {
    this._router.put(
      '/deposit',
      (req: Request, res: Response, next: NextFunction) => {
        authMiddleware(req, res, next);
      },
      (req: Request, res: Response, next: NextFunction) => {
        this.controller.update(req, res, next);
      }
    );
  }

  public createTransferRoute(authMiddleware: RequestHandler): void {
    this._router.put(
      '/transfer',
      (req: Request, res: Response, next: NextFunction) => {
        authMiddleware(req, res, next);
      },
      (req: Request, res: Response, next: NextFunction) => {
        this.controller.update(req, res, next);
      }
    );
  }
}

export default AccountRouter;
