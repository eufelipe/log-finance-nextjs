import { ValidationError } from "./validation-error";

export class InvalidEmailError extends ValidationError {
  constructor(field: string) {
    super(`${field} is not a valid email`);
    this.name = "InvalidEmailError";
  }
}
