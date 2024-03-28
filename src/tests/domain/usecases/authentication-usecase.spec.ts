import { describe, expect, it, vi } from "vitest";

import { LoadAccountByEmailRepository } from "@/domain/contracts/repositories";
import { AuthenticationUseCase } from "@/domain/usecases";

import {
  LoadAccountByEmailRepositorySpy,
  makeFakeAccount,
} from "@/tests/mocks";

type SutTypes = {
  sut: AuthenticationUseCase;
  loadAccountByEmailRepositorySpy: LoadAccountByEmailRepository;
};

const makeSut = (): SutTypes => {
  const loadAccountByEmailRepositorySpy = new LoadAccountByEmailRepositorySpy();
  const sut = new AuthenticationUseCase(loadAccountByEmailRepositorySpy);

  return {
    sut,
    loadAccountByEmailRepositorySpy,
  };
};

describe("Authentication UseCase", () => {
  it("should return an account if LoadAccountByEmailRepository returns an account", async () => {
    const { sut, loadAccountByEmailRepositorySpy } = makeSut();

    const fakeAccount = makeFakeAccount();

    loadAccountByEmailRepositorySpy.loadByEmail = vi
      .fn()
      .mockResolvedValue(fakeAccount);

    const account = await sut.auth({ email: "valid_email@example.com" });

    expect(account).toEqual(fakeAccount);
  });

  it("should call LoadAccountByEmailRepository with the correct email", async () => {
    const { sut, loadAccountByEmailRepositorySpy } = makeSut();

    const loadSpy = vi
      .spyOn(loadAccountByEmailRepositorySpy, "loadByEmail")
      .mockResolvedValue(null);

    const email = "inexistent_email@example.com";

    const account = await sut.auth({ email });

    expect(account).toBeNull();
    expect(loadSpy).toHaveBeenCalledWith(email);
  });

  it("should handle an exception thrown by LoadAccountByEmailRepository", async () => {
    const { sut, loadAccountByEmailRepositorySpy } = makeSut();

    vi.spyOn(loadAccountByEmailRepositorySpy, "loadByEmail").mockRejectedValue(
      new Error("Test error"),
    );

    const promise = sut.auth({ email: "any_email@example.com" });

    await expect(promise).rejects.toThrow("Error on authentication");
  });
});
