import Transaction from '../database/models/Transaction';
import GenericRouter from './GenericRouter';

class TransactionRouter extends GenericRouter<Transaction> {
  public createRoutes(): void {
    this.createPostRoute(this.authMiddleware);
    this.createGetAllRoute(this.authMiddleware);
    this.createGetByIdRoute(this.authMiddleware);
    this.createPutRoute(this.authMiddleware);
    this.createDeleteRoute(this.authMiddleware);
  }

}

export default TransactionRouter;
