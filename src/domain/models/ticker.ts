export type TickerType =
  | "ordinary"
  | "preferred"
  | "fractional"
  | "depositaryReceipt"
  | "convertible"
  | "restricted"
  | "treasury";

export type Ticker = {
  id: string;
  stockId: string;
  symbol: string;
  type: TickerType;
};

export default Ticker;
