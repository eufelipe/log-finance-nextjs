import { Validation } from "@/validation/contracts";

export class ValidationSpy implements Validation {
  error: Error | null = null;
  input: any;

  validate(input: any): void {
    this.input = input;
    if (this.error) {
      throw this.error;
    }
  }
}
