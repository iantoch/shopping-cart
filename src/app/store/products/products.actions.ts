import { createAction, props } from '@ngrx/store';
import { Product } from '../../core/types/product';
import { Filters } from '../../core/types/filters';

export const loadProducts = createAction(
  '[Products] Load Products',
  props<{ page: number; limit: number; filters?: Filters }>()
);
export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ products: Product[] }>()
);
