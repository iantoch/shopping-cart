import { createAction, props } from '@ngrx/store';
import { Product } from '../../core/types/product';

export const loadProducts = createAction('[Products] Load Products');
export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ products: Product[] }>()
);
