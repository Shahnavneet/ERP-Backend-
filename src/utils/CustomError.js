export class CustomError extends Error {
  constructor(name, statuscode) {
    super(name);
    this.status = statuscode;
  }
}
