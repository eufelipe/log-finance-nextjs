import Company from "./company";

export type TickerType =
  | "ORDINARY"
  | "PREFERRED"
  | "FRACTIONAL"
  | "DEPOSITARY_RECEIPT"
  | "CONVERTIBLE"
  | "RESTRICTED"
  | "TREASURY";

export type Stock = {
  id: string;
  assetId: string;

  type: TickerType;
  company: Company;
};

export default Stock;
