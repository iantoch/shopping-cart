import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {
  productsFeatureKey,
  productsReducer,
} from './store/products/products.reducer';
import { provideEffects } from '@ngrx/effects';
import { ProductsEffects } from './store/products/products.effects';
import { cartReducer } from './store/cart/cart.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync('noop'),
    provideHttpClient(),
    provideStore(),
    provideState(productsFeatureKey, productsReducer),
    provideState('cart', cartReducer),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
    provideEffects([ProductsEffects]),
  ],
};
