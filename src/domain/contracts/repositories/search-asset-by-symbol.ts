import { Asset } from "@/domain/models";

type Input = SearchAssetBySymbolRepository.Input;
type Output = SearchAssetBySymbolRepository.Output;

export interface SearchAssetBySymbolRepository {
  search: (input: Input) => Promise<Output>;
}

export namespace SearchAssetBySymbolRepository {
  export type Input = string;
  export type Output = Asset[];
}
