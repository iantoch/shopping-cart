import { createFeature, createReducer, on } from '@ngrx/store';
import { loadProductsSuccess } from './products.actions';
import { ProductsState } from '../state.model';

const initialState: ProductsState = [];

const productsFeature = createFeature({
  name: 'products',
  reducer: createReducer(
    initialState,
    on(loadProductsSuccess, (state, { products }) => ({
      ...state,
      products,
    }))
  ),
});

export const { name: productsFeatureKey, reducer: productsReducer } =
  productsFeature;
