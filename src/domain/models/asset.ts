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

export type Asset = {
  id: string;
  name: string;
  assetType: AssetType;
  description?: string;
};

export default Asset;
