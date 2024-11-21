import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../state.model';

export const selectCartState = (state: AppState) => state.cart;

export const selectCartProducts = createSelector(
  selectCartState,
  (state) => state.products
);

export const selectCartTotalPrice = createSelector(
  selectCartState,
  (state) => state.totalPrice
);
