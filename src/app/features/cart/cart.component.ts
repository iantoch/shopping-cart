import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../core/types/product';
import { Store } from '@ngrx/store';
import {
  selectCartProducts,
  selectCartTotalPrice,
} from '../../store/cart/cart.selector';
import {
  addProductToCart,
  removeProductFromCart,
} from '../../store/cart/cart.actions';
import { AppState } from '../../store/state.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartProducts$: Observable<Product[]>;
  cartTotalPrice$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.cartProducts$ = this.store.select(selectCartProducts);
    this.cartTotalPrice$ = this.store.select(selectCartTotalPrice);
  }

  addToCart(product: Product): void {
    this.store.dispatch(addProductToCart({ product }));
  }

  removeFromCart(productId: string): void {
    this.store.dispatch(removeProductFromCart({ productId }));
  }
}
