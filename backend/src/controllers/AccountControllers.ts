import { Response, NextFunction } from 'express';
import Account from '../database/models/Account';
import IAccountServices from '../services/interfaces/IAccountServices';
import { RequestWithUserId } from '../types/express';
import Controllers from './Controllers';
import IAccountControllers from './interfaces/IAccountControllers';

class AccountControllers extends Controllers<Account> implements IAccountControllers {
  protected services: IAccountServices;

  public async transfer(req: RequestWithUserId, res: Response, next: NextFunction): Promise<Response> {
    try {
      const user = req.user;
      const { value, creditedUserName } = req.body;
      await this.services.transfer(value, user.id, creditedUserName);
      return res.status(200).json({ message: 'successful transfer!'});
    } catch (err: unknown) {
      next(err);
    }
  }
}

export default AccountControllers;