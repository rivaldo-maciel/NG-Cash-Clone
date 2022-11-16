import { Request, Response, NextFunction } from 'express';
import IServices from '../services/interfaces/IServices';
import IControllers from './interfaces/IControllers';

class Controllers<T> implements IControllers {
  protected services: IServices<T>;

  public async create(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const entity = req.body;
      const createdEntity = await this.services.create(entity);
      return res.status(201).json(createdEntity);
    } catch (err: unknown) {
      next(err);
    }
  }

  public async getAll(_req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const allEntities = await this.services.getAll();
      return res.status(200).json(allEntities);
    } catch (err: unknown) {
      next(err);
    }
  }

  public async getOne(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const { id } = req.params;
      const entity = await this.services.getOne(Number(id));
      return res.status(200).json(entity);
    } catch (err: unknown) {
      next(err);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const { id } = req.params;
      const alteration = req.body;
      const updateResult = await this.services.update(Number(id), alteration); 
      return res.status(200).json(updateResult);
    } catch (err: unknown) {
      next(err);
    }
  }

  public async remove(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const { id } = req.params;
      const deleteResult = await this.services.remove(Number(id));
      return res.status(200).json(deleteResult);
    } catch (err: unknown) {
      next(err);
    }
  }
}

export default Controllers;