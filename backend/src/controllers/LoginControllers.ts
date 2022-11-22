import { Request, Response, NextFunction } from 'express';
import ILoginServices from '../services/interfaces/ILoginServices';
import ILoginControllers from './interfaces/ILoginControllers';
import * as jwt from 'jsonwebtoken';
import { User } from '../database/models';
import 'dotenv/config';

class LoginControllers implements ILoginControllers {
  private services: ILoginServices;

  constructor(services: ILoginServices) {
    this.services = services;
  }
  public async login(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      const { userName, password } = req.body;
      const user = await this.services.login(userName, password);
      return res.status(200).json(user);
    } catch (err: unknown) {
      next(err);
    }
  }
  public async authWithToken(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      const token = req.body.token;
      const userDecoded = jwt.verify(token, process.env.JWT_SECRET) as User;
      return res.status(200).json({
        userName: userDecoded.userName,
        accountId: userDecoded.accountId,
        token
      })
    } catch (err) {
      next(err);
    }
  }
}

export default LoginControllers;
