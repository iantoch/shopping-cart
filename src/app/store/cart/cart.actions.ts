import { createAction, props } from '@ngrx/store';
import { CartProduct } from '../state.model';
import { Product } from '../../core/types/product';

export const addProductToCart = createAction(
  '[Cart] Add Product to Cart',
  props<{ product: Product }>()
);

export const removeProductFromCart = createAction(
  '[Cart] Remove Product from Cart',
  props<{ productId: string }>()
);
