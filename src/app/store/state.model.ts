import { Product } from '../core/types/product';

export interface AppState {
  products: ProductsState;
  cart: CartState;
}

export interface ProductsState {
  products: Product[];
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
}
export interface CartState {
  products: CartProduct[];
  totalPrice: number;
}

export interface CartProduct extends Product {
  count: number;
}
