import { describe, expect, it } from "vitest";

import { InvalidEmailError, RequiredFieldError } from "@/validation/errors";
import { EmailValidation } from "@/validation/validators";

type SutTypes = {
  sut: EmailValidation;
};

const makeSut = (): SutTypes => {
  const sut = new EmailValidation();
  return {
    sut,
  };
};

describe("EmailValidation", () => {
  it("Should throw a RequiredFieldError if email is empty", () => {
    const { sut } = makeSut();
    const input = "";

    expect(() => sut.validate(input)).toThrow(new RequiredFieldError("email"));
  });

  it("Should throw an InvalidEmailError if email is invalid", () => {
    const { sut } = makeSut();
    const input = "invalid_email";

    expect(() => sut.validate(input)).toThrow(new InvalidEmailError());
  });

  it("Should not throw if email is valid", () => {
    const { sut } = makeSut();
    const input = "valid@example.com";

    expect(() => sut.validate(input)).not.toThrow();
  });
});
