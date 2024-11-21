import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../state.model';
import { Product } from '../../core/types/product';

export const selectProductState = createFeatureSelector<AppState>('products');

export const selectAllProducts = createSelector(
  selectProductState,
  (state: AppState) => state.products
);

// export const selectProductsByPriceRange = (
//   minPrice: number,
//   maxPrice: number
// ) =>
//   createSelector(selectAllProducts, (products) =>
//     products.filter(
//       (product) => product.price >= minPrice && product.price <= maxPrice
//     )
//   );

// export const selectFilteredProducts = (searchQuery: string) =>
//   createSelector(selectAllProducts, (products) =>
//     products.filter((product) =>
//       product.name.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//   );
