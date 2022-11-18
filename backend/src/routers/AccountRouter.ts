import Account from '../database/models/Account';
import GenericRouter from './GenericRouter';

class AccountRouter extends GenericRouter<Account> {
  public createRoutes(): void {
    this.createPostRoute(this.authMiddleware);
    this.createGetAllRoute(this.authMiddleware);
    this.createGetByIdRoute(this.authMiddleware);
    this.createPutRoute(this.authMiddleware);
    this.createDeleteRoute(this.authMiddleware);
  }
}

export default AccountRouter;
