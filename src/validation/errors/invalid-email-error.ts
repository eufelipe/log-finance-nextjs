import { ValidationError } from "./validation-error";

export class InvalidEmailError extends ValidationError {
  constructor() {
    super(`email is not a valid`);
    this.name = "InvalidEmailError";
  }
}
