import { NextFunction, Response } from 'express';
import Account from '../../database/models/Account';
import { RequestWithUserId } from '../../types/express';
import IControllers from './IControllers';

interface IAccountControllers extends IControllers<Account> {
  transfer(req: RequestWithUserId, res: Response, next: NextFunction): Promise<Response>;
  deposit(req: RequestWithUserId, res: Response, next: NextFunction): Promise<Response>;
}

export default IAccountControllers;