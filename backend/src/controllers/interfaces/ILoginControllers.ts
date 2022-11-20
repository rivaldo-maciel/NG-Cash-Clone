import { NextFunction, Request, Response } from 'express';

interface ILoginControllers {
  login(req: Request, res: Response, next: NextFunction): Promise<Response>;
}

export default ILoginControllers;
