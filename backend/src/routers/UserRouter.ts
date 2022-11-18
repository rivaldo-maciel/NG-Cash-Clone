import User from '../database/models/User';
import GenericRouter from './GenericRouter';

class UserRouter extends GenericRouter<User> {
  public createRoutes(): void {
    this.createPostRoute();
    this.createGetAllRoute(this.authMiddleware);
    this.createGetByIdRoute(this.authMiddleware);
    this.createPutRoute(this.authMiddleware);
    this.createDeleteRoute(this.authMiddleware);
  }
}

export default UserRouter;
