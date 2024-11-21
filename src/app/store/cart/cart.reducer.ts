import { createReducer, on } from '@ngrx/store';
import * as CartActions from '../cart/cart.actions';
import { CartState } from '../state.model';

export const initialState: CartState = {
  products: [],
  totalPrice: 0,
};

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addProductToCart, (state, { product }) => ({
    ...state,
    products: [...state.products, product],
    totalPrice: state.totalPrice + product.price,
  })),
  on(CartActions.removeProductFromCart, (state, { productId }) => {
    const updatedProducts = state.products.filter(
      (product) => product.id !== productId
    );
    const updatedTotalPrice = updatedProducts.reduce(
      (total, product) => total + product.price,
      0
    );
    return {
      ...state,
      products: updatedProducts,
      totalPrice: updatedTotalPrice,
    };
  })
);
