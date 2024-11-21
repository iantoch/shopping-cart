import { createFeature, createReducer, on } from '@ngrx/store';
import { loadProducts, loadProductsSuccess } from './products.actions';
import { ProductsState } from '../state.model';

const initialState: ProductsState = {
  products: [],
  currentPage: 1,
  totalPages: 0,
  itemsPerPage: 10,
};

const productsFeature = createFeature({
  name: 'products',
  reducer: createReducer(
    initialState,
    on(loadProducts, (state, { page }) => ({
      ...state,
      currentPage: page,
    })),
    on(loadProductsSuccess, (state, { products }) => ({
      ...state,
      products,
    }))
  ),
});

export const { name: productsFeatureKey, reducer: productsReducer } =
  productsFeature;
