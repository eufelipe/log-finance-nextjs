export type Company = {
  id: string;
  assetId: string;
  name: string;
  marketValue: number;
  firmValue: number;
  equity: number;
  totalStocks: number;
  assets: number;
  currentAssets: number;
  availability: number;
  listingSegment: string;
  freeFloat: number;
  tagAlong: number;
  dailyLiquidity: number;
};

export default Company;
