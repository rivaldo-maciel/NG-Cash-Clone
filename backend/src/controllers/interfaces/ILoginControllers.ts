import { NextFunction, Request, Response } from 'express';

interface ILoginControllers {
  authWithToken(req: Request, res: Response, next: NextFunction): Promise<Response>;
  login(req: Request, res: Response, next: NextFunction): Promise<Response>;
}

export default ILoginControllers;
