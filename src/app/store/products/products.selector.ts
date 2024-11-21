import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from '../state.model';

export const selectProductState =
  createFeatureSelector<ProductsState>('products');

export const selectAllProducts = createSelector(
  selectProductState,
  (state: ProductsState) => state.products
);

export const selectCurrentPage = createSelector(
  selectProductState,
  (state) => state.currentPage
);
