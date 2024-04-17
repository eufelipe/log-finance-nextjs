import { Asset } from "@/domain/models";

type Input = SearchAssetBySymbol.Input;
type Output = SearchAssetBySymbol.Output;

export interface SearchAssetBySymbol {
  search: (input: Input) => Promise<Output>;
}

export namespace SearchAssetBySymbol {
  export type Input = string;
  export type Output = Asset[];
}
