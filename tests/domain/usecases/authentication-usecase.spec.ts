import { describe, expect, it, vi } from "vitest";

import { LoadAccountByEmailRepository } from "@/domain/contracts/repositories";
import { AuthenticationUseCase } from "@/domain/usecases";

import { AuthenticationError } from "@/domain/errors";
import {
  CreateAccountUseCaseSpy,
  LoadAccountByEmailRepositorySpy,
  ValidationSpy,
  makeFakeAccount,
  makeOAuthUser,
} from "@/tests/mocks";
import { ValidationError } from "@/validation/errors";

type SutTypes = {
  sut: AuthenticationUseCase;
  createAccountUseCaseSpy: CreateAccountUseCaseSpy;
  loadAccountByEmailRepositorySpy: LoadAccountByEmailRepository;
  validationSpy: ValidationSpy;
};

const fakeAccount = makeFakeAccount();
const fakeOAuthUser = makeOAuthUser();

const makeSut = (): SutTypes => {
  const loadAccountByEmailRepositorySpy = new LoadAccountByEmailRepositorySpy();
  const createAccountUseCaseSpy = new CreateAccountUseCaseSpy();
  const validationSpy = new ValidationSpy();

  const sut = new AuthenticationUseCase(
    loadAccountByEmailRepositorySpy,
    createAccountUseCaseSpy,
    validationSpy
  );

  return {
    sut,
    loadAccountByEmailRepositorySpy,
    createAccountUseCaseSpy,
    validationSpy,
  };
};

describe("Authentication UseCase", () => {
  it("should return an account if LoadAccountByEmailRepository returns an account", async () => {
    const { sut, loadAccountByEmailRepositorySpy } = makeSut();

    loadAccountByEmailRepositorySpy.loadByEmail = vi
      .fn()
      .mockResolvedValue(fakeAccount);

    const account = await sut.auth(fakeOAuthUser);

    expect(account).toEqual(fakeAccount);
  });

  it("should create a new account if LoadAccountByEmailRepository does not find an account", async () => {
    const { sut, loadAccountByEmailRepositorySpy, createAccountUseCaseSpy } =
      makeSut();

    vi.spyOn(
      loadAccountByEmailRepositorySpy,
      "loadByEmail"
    ).mockResolvedValueOnce(null);

    await sut.auth(fakeOAuthUser);

    expect(createAccountUseCaseSpy.input).toEqual(fakeOAuthUser);
  });

  it("should handle an exception thrown by LoadAccountByEmailRepository", async () => {
    const { sut, loadAccountByEmailRepositorySpy } = makeSut();

    vi.spyOn(loadAccountByEmailRepositorySpy, "loadByEmail").mockRejectedValue(
      new Error("Test error")
    );

    const promise = sut.auth(fakeOAuthUser);

    await expect(promise).rejects.toThrow("Error on authentication");
  });

  it("should throw AuthenticationError with 'Invalid email' message on ValidationError", async () => {
    const { sut, validationSpy } = makeSut();

    const validationError = new ValidationError("Invalid email");
    vi.spyOn(validationSpy, "validate").mockImplementation(() => {
      throw validationError;
    });

    const promise = sut.auth(fakeOAuthUser);

    await expect(promise).rejects.toThrow(
      new AuthenticationError("Invalid email")
    );
  });
});
