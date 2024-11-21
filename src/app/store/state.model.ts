import { Product } from '../core/types/product';

export interface AppState {
  products: ProductsState;
  cart: CartState;
}

export type ProductsState = Product[];

export interface CartState {
  products: Product[];
  totalPrice: number;
}
