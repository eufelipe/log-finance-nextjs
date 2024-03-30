import { describe, expect, it } from "vitest";

import { InvalidEmailError, RequiredFieldError } from "@/validation/errors";
import { EmailValidation } from "@/validation/validators";

type SutTypes = {
  sut: EmailValidation;
};
const fieldName = "email";

const makeSut = (): SutTypes => {
  const sut = new EmailValidation(fieldName);
  return {
    sut,
  };
};

describe("EmailValidation", () => {
  it("Should throw a RequiredFieldError if email is empty", () => {
    const { sut } = makeSut();
    const input = { [fieldName]: "" };

    expect(() => sut.validate(input)).toThrow(
      new RequiredFieldError(fieldName)
    );
  });

  it("Should throw an InvalidEmailError if email is invalid", () => {
    const { sut } = makeSut();
    const input = { [fieldName]: "invalid_email" };

    expect(() => sut.validate(input)).toThrow(new InvalidEmailError(fieldName));
  });

  it("Should not throw if email is valid", () => {
    const { sut } = makeSut();
    const input = { [fieldName]: "valid@example.com" };

    expect(() => sut.validate(input)).not.toThrow();
  });
});
