import { Request, Response, NextFunction } from 'express';
import ILoginServices from '../services/interfaces/ILoginServices';
import ILoginControllers from './interfaces/ILoginControllers';

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
      const token = await this.services.login(userName, password);
      return res.status(200).json({ userName, password, token });
    } catch (err: unknown) {
      next(err);
    }
  }
}

export default LoginControllers;
