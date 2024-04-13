import { CryptoCurrency, ETF, RealEstateFund, Stock } from "@/domain/models";

export type AssetType =
  | "STOCK"
  | "CRYPTOCURRENCY"
  | "ETF"
  | "REAL_ESTATE_FUND"
  | "FIXED_INCOME"
  | "COMMODITY"
  | "MUTUAL_FUND"
  | "OPTIONS"
  | "FUTURES"
  | "SWAPS"
  | "PRIVATE_DEBT"
  | "FOREX"
  | "PRIVATE_EQUITY"
  | "VENTURE_CAPITAL"
  | "DIRECT_REAL_ESTATE";

export type AssetDetails = Stock | RealEstateFund | CryptoCurrency | ETF;

export interface Asset {
  id: string;
  name?: string;
  assetType: AssetType;
  description?: string;
  details: AssetDetails | null;
}

export default Asset;
