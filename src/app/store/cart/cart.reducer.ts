import { createReducer, on } from '@ngrx/store';
import * as CartActions from '../cart/cart.actions';
import { CartState } from '../state.model';

export const initialState: CartState = {
  products: [],
  totalPrice: 0,
};

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addProductToCart, (state, { product }) => {
    const existingProductIndex = state.products.findIndex(
      (p) => p.id === product.id
    );

    if (existingProductIndex >= 0) {
      const updatedProducts = state.products.map((p, index) =>
        index === existingProductIndex ? { ...p, count: p.count + 1 } : p
      );

      return {
        ...state,
        products: updatedProducts,
        totalPrice: state.totalPrice + product.price,
      };
    } else {
      return {
        ...state,
        products: [...state.products, { ...product, count: 1 }],
        totalPrice: state.totalPrice + product.price,
      };
    }
  }),

  on(CartActions.removeProductFromCart, (state, { productId }) => {
    const existingProductIndex = state.products.findIndex(
      (product) => product.id === productId
    );

    if (existingProductIndex >= 0) {
      const productToRemove = state.products[existingProductIndex];

      if (productToRemove.count > 1) {
        const updatedProducts = state.products.map((p, index) =>
          index === existingProductIndex ? { ...p, count: p.count - 1 } : p
        );

        return {
          ...state,
          products: updatedProducts,
          totalPrice: state.totalPrice - productToRemove.price,
        };
      } else {
        const updatedProducts = state.products.filter(
          (product) => product.id !== productId
        );

        return {
          ...state,
          products: updatedProducts,
          totalPrice: state.totalPrice - productToRemove.price,
        };
      }
    }

    return state;
  })
);
