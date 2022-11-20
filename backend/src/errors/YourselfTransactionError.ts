import GenericError from './GenericError';

class YourselfTransactionError extends GenericError {
  constructor() {
    super();
    this.message = 'you cannot transfer to yourself';
    this.status = 400;
  }
}

export default YourselfTransactionError;
