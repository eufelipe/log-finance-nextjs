import { Validation } from "@/validation/contracts";
import { InvalidEmailError, RequiredFieldError } from "@/validation/errors";

export class EmailValidation implements Validation {
  validate(input: any): void {
    if (!input) {
      throw new RequiredFieldError("email");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(input)) {
      throw new InvalidEmailError();
    }
  }
}
