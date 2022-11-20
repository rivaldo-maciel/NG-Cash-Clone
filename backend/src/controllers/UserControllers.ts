import { Request, Response, NextFunction } from 'express';
import User from '../database/models/User';
import Controllers from './Controllers';
import IUserControllers from './interfaces/IUserControllers';

class UserControllers extends Controllers<User> implements IUserControllers {
  public async create(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const entity = req.body;
      const createdEntity = await this.services.create(entity);
      return res.status(201).json(createdEntity);
    } catch (err: unknown) {
      next(err);
    }
  }
}

export default UserControllers;