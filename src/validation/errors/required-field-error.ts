import { ValidationError } from "./validation-error";

export class RequiredFieldError extends ValidationError {
  constructor(field: string) {
    super(`${field} is required`);
    this.name = "RequiredFieldError";
  }
}
