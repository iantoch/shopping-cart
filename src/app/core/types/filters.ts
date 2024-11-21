import { Price } from '../../features/product-list/filters/price-ranges.model';

export interface Filters {
  priceRanges: Price[];
  search: string;
  selectedType: string;
}
