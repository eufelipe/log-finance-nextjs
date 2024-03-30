import { Validator } from "@/validation/contracts";
import { InvalidEmailError, RequiredFieldError } from "@/validation/errors";

interface ValidationInput {
  [key: string]: any;
}

export class EmailValidation implements Validator {
  constructor(private readonly fieldName: string) {}

  validate(input: ValidationInput): void {
    const email = input[this.fieldName];
    if (!email) {
      throw new RequiredFieldError(this.fieldName);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new InvalidEmailError(this.fieldName);
    }
  }
}
