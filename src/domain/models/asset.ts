export type TAssetType =
  | "STOCK"
  | "CRYPTOCURRENCY"
  | "ETF"
  | "REAL_ESTATE_FUND";

export type Asset = {
  id: string;
  name: string;
  assetType: TAssetType;
  description?: string;
};

export default Asset;
