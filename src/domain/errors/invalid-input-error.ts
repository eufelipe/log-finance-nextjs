export class InvalidInputError extends Error {
  constructor(message: string) {
    super(`Invalid input: ${message}`);
    this.name = "InvalidInputError";
  }
}
