import { SearchAssetBySymbolRepository } from "@/domain/contracts/repositories";

import { SearchAssetBySymbol } from "@/domain/entities";

type Input = SearchAssetBySymbol.Input;
type Output = SearchAssetBySymbol.Output;

export class SearchAssetBySymbolUseCase implements SearchAssetBySymbol {
  constructor(private readonly repository: SearchAssetBySymbolRepository) {}

  async search(input: Input): Promise<Output> {
    const assets = await this.repository.search(input);

    return assets;
  }
}
