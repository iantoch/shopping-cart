import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { Product } from '../../core/types/product';
import { AppState } from '../../store/state.model';
import { Store } from '@ngrx/store';
import { addProductToCart } from '../../store/cart/cart.actions';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [MatDialogModule, ButtonComponent],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.scss',
})
export class ProductInfoComponent {
  product: Product;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { product: any },
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<ProductInfoComponent>,
    private store: Store<AppState>
  ) {
    this.product = data.product;
  }

  addToCart() {
    let product = this.product;
    this.store.dispatch(addProductToCart({ product }));
    this.snackBar.open(`${this.product.name} added to cart!`, 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
    this.dialogRef.close();
  }
}
