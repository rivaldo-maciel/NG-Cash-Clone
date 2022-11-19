import GenericError from './GenericError';

class UserNotFoundError extends GenericError {
  constructor() {
    super();
    this.message = 'user not found';
    this.status = 404;
  }
}

export default UserNotFoundError;
