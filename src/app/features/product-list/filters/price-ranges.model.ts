export interface PriceRanges {
  label: string;
  value: Price;
}

export interface Price {
  gte: number;
  lte: number;
}
