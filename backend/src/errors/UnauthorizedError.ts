import GenericError from './GenericError';

class UnauthorizedError extends GenericError {
  constructor() {
    super();
    this.message = 'unauthorized';
    this.status = 401;
  }
}

export default UnauthorizedError;
