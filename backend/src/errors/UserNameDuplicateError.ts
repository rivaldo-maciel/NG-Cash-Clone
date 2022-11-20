import GenericError from './GenericError';

class UserNameDuplicateError extends GenericError {
  constructor() {
    super();
    this.message = 'user name already exists';
    this.status = 400;
  }
}

export default UserNameDuplicateError;
