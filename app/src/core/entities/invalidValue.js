export class InvalidValueError extends Error {
  constructor(error, currentValue = undefined) {
    super(error);
    this.currentValue = currentValue;
  }
}
