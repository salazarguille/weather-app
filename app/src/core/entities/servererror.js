// avoiding primitive obssession
// https://refactoring.guru/smells/primitive-obsession

export class ServerError extends Error{
  constructor(error, statusCode, originalError) {
    super('');
    this.error = error;
    this.statusCode = statusCode;
    this.originalError = originalError;
  }

  getErrorMessage() {
    return super.error;
  }
}
