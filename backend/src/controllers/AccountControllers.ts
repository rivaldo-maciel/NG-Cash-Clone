import { Response, NextFunction } from 'express';
import Account from '../database/models/Account';
import { AccountServices } from '../services';
import { RequestWithUserId } from '../types/express';
import Controllers from './Controllers';
import IAccountControllers from './interfaces/IAccountControllers';

class AccountControllers extends Controllers<Account> implements IAccountControllers {
  protected services: AccountServices;

  public async deposit(req: RequestWithUserId, res: Response, next: NextFunction): Promise<Response> {
    try {
      const user = req.user;
      const infos = req.body;
      await this.services.deposit(infos.value, user.accountId);
      return res.status(200).json({ message: 'successful deposit!'});
    } catch (err: unknown) {
      next(err);
    }
  }

  public async transfer(req: RequestWithUserId, res: Response, next: NextFunction): Promise<Response> {
    try {
      const user = req.user;
      const infos = req.body;
      await this.services.transfer(Number(infos.value), user.accountId, infos.creditedAccountId);
      return res.status(200).json({ message: 'successful transfer!'});
    } catch (err: unknown) {
      next(err);
    }
  }
}

export default AccountControllers;