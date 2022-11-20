import { NextFunction, Request, RequestHandler, Response, Router } from 'express';
import IControllers from '../controllers/interfaces/IControllers';

abstract class GenericRouter<T> {
  protected _router: Router;
  protected controller: IControllers<T>;
  protected authMiddleware: RequestHandler;

  constructor(expressRouter: Router, controller: IControllers<T>, authMiddleware: RequestHandler) {
    this._router = expressRouter;
    this.controller = controller;
    this.authMiddleware = authMiddleware;
    this.createRoutes();
  }

  public abstract createRoutes(): void;

  public createPostRoute(authMiddleware: RequestHandler | void): void {
    this._router.post(
      '/',
      (req: Request, res: Response, next: NextFunction) => {
        authMiddleware ? authMiddleware(req, res, next) : next();
      },
      (req: Request, res: Response, next: NextFunction) => {
        this.controller.create(req, res, next);
      }
    );
  }

  public createGetAllRoute(authMiddleware: RequestHandler | void): void {
    this._router.get('/',
    (req: Request, res: Response, next: NextFunction) => {
      authMiddleware ? authMiddleware(req, res, next) : next();
    },
      (req: Request, res: Response, next: NextFunction) => {
      this.controller.getAll(req, res, next);
    });
  }

  public createGetByIdRoute(authMiddleware: RequestHandler | void): void {
    this._router.get(
      '/:id',
      (req: Request, res: Response, next: NextFunction) => {
        authMiddleware ? authMiddleware(req, res, next) : next();
      },
      (req: Request, res: Response, next: NextFunction) => {
        this.controller.getOne(req, res, next);
      }
    );
  }

  public createPutRoute(authMiddleware: RequestHandler | void): void {
    this._router.put(
      '/:id',
      (req: Request, res: Response, next: NextFunction) => {
        authMiddleware ? authMiddleware(req, res, next) : next();
      },
      (req: Request, res: Response, next: NextFunction) => {
        this.controller.update(req, res, next);
      }
    );
  }

  public createDeleteRoute(authMiddleware: RequestHandler | void): void {
    this._router.delete(
      '/:id',
      (req: Request, res: Response, next: NextFunction) => {
        authMiddleware ? authMiddleware(req, res, next) : next();
      },
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
