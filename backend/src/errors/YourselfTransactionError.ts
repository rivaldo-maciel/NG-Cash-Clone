import GenericError from './GenericError';

class YourselfTransactionError extends GenericError {
  constructor() {
    super();
    this.message = 'you cannot transfer to yourself';
  }
}

export default YourselfTransactionError;
