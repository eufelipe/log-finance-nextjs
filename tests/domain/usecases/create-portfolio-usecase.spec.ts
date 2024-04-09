import { describe, expect, it, vi } from "vitest";

import { AddPortfolioRepository } from "@/domain/contracts/repositories";
import { CreatePortfolioUseCase } from "@/domain/usecases";

import { UnexpectedError } from "@/domain/errors";
import { ValidationError } from "@/validation/errors";
import {
  AddPortfolioRepositorySpy,
  ValidationSpy,
  makeFakePortfolioInput,
} from "tests/mocks";

type SutTypes = {
  sut: CreatePortfolioUseCase;
  addPortfolioRepositorySpy: AddPortfolioRepository;
  validationSpy: ValidationSpy;
};

const makeSut = (): SutTypes => {
  const addPortfolioRepositorySpy = new AddPortfolioRepositorySpy();
  const validationSpy = new ValidationSpy();

  const sut = new CreatePortfolioUseCase(
    addPortfolioRepositorySpy,
    validationSpy
  );

  return {
    sut,
    validationSpy,
    addPortfolioRepositorySpy,
  };
};

describe("Create Portfolio UseCase", () => {
  it("should create a portfolio and return it if AddPortfolioRepository succeeds", async () => {
    const { sut, addPortfolioRepositorySpy, validationSpy } = makeSut();

    const fakePortfolioInput = makeFakePortfolioInput();

    addPortfolioRepositorySpy.add = vi
      .fn()
      .mockResolvedValue(fakePortfolioInput);

    const portfolio = await sut.create(fakePortfolioInput);

    expect(portfolio).toEqual(fakePortfolioInput);
    expect(addPortfolioRepositorySpy.add).toHaveBeenCalledWith(
      fakePortfolioInput
    );
    expect(validationSpy.validate).toHaveBeenCalledWith(
      fakePortfolioInput.name
    );
  });

  it("should throw a ValidationError if validation fails", async () => {
    const { sut, validationSpy } = makeSut();

    vi.spyOn(validationSpy, "validate").mockImplementation(() => {
      throw new ValidationError("Invalid name field");
    });

    const fakePortfolioInput = makeFakePortfolioInput();

    const promise = sut.create(fakePortfolioInput);

    await expect(promise).rejects.toThrow(ValidationError);
    await expect(promise).rejects.toThrow("Invalid name field");
  });

  it("should throw an UnexpectedError if AddPortfolioRepository fails", async () => {
    const { sut, addPortfolioRepositorySpy } = makeSut();

    vi.spyOn(addPortfolioRepositorySpy, "add").mockRejectedValue(
      new Error("Test error")
    );

    const fakePortfolioInput = makeFakePortfolioInput();

    const promise = sut.create(fakePortfolioInput);

    await expect(promise).rejects.toThrow(UnexpectedError);
    await expect(promise).rejects.toThrow("Error on CreatePortfolio");
  });
});
