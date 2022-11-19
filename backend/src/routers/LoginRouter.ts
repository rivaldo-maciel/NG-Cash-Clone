import { NextFunction, Request, Response, Router } from 'express';
import ILoginControllers from '../controllers/interfaces/ILoginControllers';

class LoginRouter {
  protected router: Router;
  protected controller: ILoginControllers;

  constructor(expressRouter: Router, controller: ILoginControllers) {
    this.router = expressRouter;
    this.controller = controller;
    this.createLoginRouter();
  }

  private createLoginRouter(): void {
    this.router.post('/', (req: Request, res: Response, next: NextFunction) => {
      this.controller.login(req, res, next);
    },)
  }
}

export default LoginRouter;
