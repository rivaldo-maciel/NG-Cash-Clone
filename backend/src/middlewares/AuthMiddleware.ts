import * as jwt from 'jsonwebtoken';
import TokenNotFoundError from "../errors/TokenNotFoundError";
import { NextFunction, Response } from 'express';
import { User } from '../database/models';
import { RequestWithUserId } from '../types/express';
import 'dotenv/config';

class AuthMiddleware {
  public verifyToken(req: RequestWithUserId, _res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization;
      if (!token) {
        throw new TokenNotFoundError();
      }
      jwt.verify(token as string, process.env.JWT_SECRET, (err, decoded: User) => {
        if (err) {
          throw err;
        }
        req.user = {
          id: decoded.id,
          accountId: decoded.accountId
        }
      });
      next();
    } catch (e: unknown) {
      next(e);
    }
  }
}

export default AuthMiddleware;