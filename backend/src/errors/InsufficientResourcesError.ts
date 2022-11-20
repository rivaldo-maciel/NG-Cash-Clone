import GenericError from './GenericError';

class InsufficientResourcesError extends GenericError {
  constructor() {
    super();
    this.message = 'insufficient resources for this operation';
    this.status = 400;
  }
}

export default InsufficientResourcesError;
