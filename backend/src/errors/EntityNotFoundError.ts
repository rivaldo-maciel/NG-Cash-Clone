import GenericError from './GenericError';

class EntityNotFoundError extends GenericError {
  constructor() {
    super();
    this.message = "entity not found";
    this.status = 404;
  }
}

export default EntityNotFoundError;
