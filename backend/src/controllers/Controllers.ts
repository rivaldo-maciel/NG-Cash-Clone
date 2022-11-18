import { Response, NextFunction } from 'express';
import IServices from '../services/interfaces/IServices';
import { RequestWithUserId } from '../types/express';
import IControllers from './interfaces/IControllers';

class Controllers<T> implements IControllers<T> {
  protected services: IServices<T>;

  constructor(services: IServices<T>) {
    this.services = services;
  }

  public async create(req: RequestWithUserId, res: Response, next: NextFunction): Promise<Response> {
    try {
      const entity = req.body;
      const user = req.user;
      const createdEntity = await this.services.create(entity, user.id);
      return res.status(201).json(createdEntity);
    } catch (err: unknown) {
      next(err);
    }
  }

  public async getAll(_req: RequestWithUserId, res: Response, next: NextFunction): Promise<Response> {
    try {
      const allEntities = await this.services.getAll();
      return res.status(200).json(allEntities);
    } catch (err: unknown) {
      next(err);
    }
  }

  public async getOne(req: RequestWithUserId, res: Response, next: NextFunction): Promise<Response> {
    try {
      const { id } = req.params;
      const user = req.user;
      const entity = await this.services.getOne(Number(id), Number(user.id));
      return res.status(200).json(entity);
    } catch (err: unknown) {
      next(err);
    }
  }

  public async update(req: RequestWithUserId, res: Response, next: NextFunction): Promise<Response> {
    try {
      const { id } = req.params;
      const alteration = req.body;
      const user = req.user;
      const updateResult = await this.services.update(Number(id), alteration, Number(user.id)); 
      return res.status(200).json(updateResult);
    } catch (err: unknown) {
      next(err);
    }
  }

  public async remove(req: RequestWithUserId, res: Response, next: NextFunction): Promise<Response> {
    try {
      const { id } = req.params;
      const user = req.user;
      const deleteResult = await this.services.remove(Number(id), Number(user.id));
      return res.status(200).json(deleteResult);
    } catch (err: unknown) {
      next(err);
    }
  }
}

export default Controllers;