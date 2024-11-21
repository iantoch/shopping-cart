import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadProducts, loadProductsSuccess } from './products.actions';
import { map, mergeMap } from 'rxjs/operators';
import { ProductsService } from '../../core/services/products.service';

@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      mergeMap(({ filters, page, limit }) =>
        this.productService.getProducts(page, limit, filters).pipe(
          map((response) =>
            loadProductsSuccess({
              products: response,
            })
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}
}
