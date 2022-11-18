import GenericError from './GenericError';

class TokenNotFoundError extends GenericError {
  constructor() {
    super();
    this.message = 'token is required';
    this.status = 400;
  }
}

export default TokenNotFoundError;
