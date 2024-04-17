import { describe, expect, it, vi } from "vitest";

import { SearchAssetBySymbolRepository } from "@/domain/contracts/repositories";
import { SearchAssetBySymbolUseCase } from "@/domain/usecases";
import { makeFakeAssets } from "@/tests/mocks";

const fakeAssets = makeFakeAssets(5);

type SutTypes = {
  sut: SearchAssetBySymbolUseCase;
  searchAssetBySymbolRepositorySpy: SearchAssetBySymbolRepository;
};

const makeSut = (): SutTypes => {
  const searchAssetBySymbolRepositorySpy =
    vi.fn() as unknown as SearchAssetBySymbolRepository;
  searchAssetBySymbolRepositorySpy.search = vi
    .fn()
    .mockResolvedValue(fakeAssets);

  const sut = new SearchAssetBySymbolUseCase(searchAssetBySymbolRepositorySpy);

  return {
    sut,
    searchAssetBySymbolRepositorySpy,
  };
};

describe("SearchAssetBySymbol UseCase", () => {
  it("should return assets when the symbol is found", async () => {
    const { sut, searchAssetBySymbolRepositorySpy } = makeSut();

    const assets = await sut.search("BBAS3");

    expect(assets).toEqual(fakeAssets);
    expect(searchAssetBySymbolRepositorySpy.search).toHaveBeenCalledWith(
      "BBAS3"
    );
  });

  it("should return an empty array when no assets are found", async () => {
    const { sut, searchAssetBySymbolRepositorySpy } = makeSut();

    searchAssetBySymbolRepositorySpy.search = vi.fn().mockResolvedValue([]);

    const assets = await sut.search("NONEXISTENT");

    expect(assets).toEqual([]);
    expect(searchAssetBySymbolRepositorySpy.search).toHaveBeenCalledWith(
      "NONEXISTENT"
    );
  });
});
