import GenericError from './GenericError';

class DepositTypeError extends GenericError {
  constructor() {
    super();
    this.message = 'invalid value';
    this.status = 400;
  }
}

export default DepositTypeError;
