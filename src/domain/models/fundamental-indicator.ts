export type FundamentalIndicator = {
  id: string;
  assetId: string;
  type: string;
  description?: string;
  value: number;
  referenceDate: Date;
};

export default FundamentalIndicator;
