import { describe, expect, it, vi } from "vitest";

import { AddAccountRepository } from "@/domain/contracts/repositories";
import { CreateAccountUseCase } from "@/domain/usecases";

import {
  AddAccountRepositorySpy,
  makeFakeAccount,
  makeOAuthUser,
} from "tests/mocks";

type SutTypes = {
  sut: CreateAccountUseCase;
  addAccountRepositorySpy: AddAccountRepository;
};

const makeSut = (): SutTypes => {
  const addAccountRepositorySpy = new AddAccountRepositorySpy();
  const sut = new CreateAccountUseCase(addAccountRepositorySpy);

  return {
    sut,
    addAccountRepositorySpy,
  };
};

describe("CreateAccount UseCase", () => {
  it("should create an account and return it if AddAccountRepository succeeds", async () => {
    const { sut, addAccountRepositorySpy } = makeSut();

    const fakeAccount = makeFakeAccount();
    const fakeUser = makeOAuthUser();

    addAccountRepositorySpy.create = vi.fn().mockResolvedValue(fakeAccount);

    const account = await sut.create(fakeUser);

    expect(account).toEqual(fakeAccount);
    expect(addAccountRepositorySpy.create).toHaveBeenCalledWith(fakeUser);
  });

  it("should call AddAccountRepository with the correct user data", async () => {
    const { sut, addAccountRepositorySpy } = makeSut();

    const fakeUser = makeOAuthUser();
    const fakeAccount = makeFakeAccount();

    const createSpy = vi
      .spyOn(addAccountRepositorySpy, "create")
      .mockResolvedValue(fakeAccount);

    await sut.create(fakeUser);

    expect(createSpy).toHaveBeenCalledWith(fakeUser);
  });

  it("should throw an error if AddAccountRepository fails", async () => {
    const { sut, addAccountRepositorySpy } = makeSut();

    vi.spyOn(addAccountRepositorySpy, "create").mockRejectedValue(
      new Error("Test error")
    );

    const fakeUser = makeOAuthUser();

    const promise = sut.create(fakeUser);

    await expect(promise).rejects.toThrow("Error on CreateAccount");
  });
});
