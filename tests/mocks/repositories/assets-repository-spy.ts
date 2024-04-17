import { faker } from "@faker-js/faker";

import { SearchAssetBySymbolRepository } from "@/domain/contracts/repositories";
import { makeFakeAssets } from "../data";

const assets = makeFakeAssets(5);

export class SearchAssetBySymbolRepositorySpy
  implements SearchAssetBySymbolRepository
{
  input = faker.string.alpha(10);
  output = assets;

  async search(input: string): Promise<SearchAssetBySymbolRepository.Output> {
    this.input = input;

    return this.output;
  }
}
