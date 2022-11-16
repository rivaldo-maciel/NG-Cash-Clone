import { NextFunction, Request, Response, Router } from 'express';
import IControllers from '../controllers/interfaces/IControllers';

class GenericRouter<T> {
  protected _router: Router;
  protected controller: IControllers<T>;

  constructor(expressRouter: Router, controller: IControllers<T>) {
    this._router = expressRouter;
    this.controller = controller;
    this.createRoutes();
  }

  public createRoutes(): void {
    this.createPostRoute();
    this.createGetAllRoute();
    this.createGetByIdRoute();
    this.createPutRoute();
    this.createDeleteRoute();
  }

  public createPostRoute(): void {
    this._router.post(
      '/',
      (req: Request, res: Response, next: NextFunction) => {
        this.controller.create(req, res, next);
      }
    );
  }

  public createGetAllRoute(): void {
    this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
      this.controller.getAll(req, res, next);
    });
  }

  public createGetByIdRoute(): void {
    this._router.get(
      '/:id',
      (req: Request, res: Response, next: NextFunction) => {
        this.controller.getOne(req, res, next);
      }
    );
  }

  public createPutRoute(): void {
    this._router.put(
      '/:id',
      (req: Request, res: Response, next: NextFunction) => {
        this.controller.update(req, res, next);
      }
    );
  }

  public createDeleteRoute(): void {
    this._router.delete(
      '/:id',
      (req: Request, res: Response, next: NextFunction) => {
        this.controller.remove(req, res, next);
      }
    );
  }

  get router() {
    return this._router;
  }
}

export default GenericRouter;
