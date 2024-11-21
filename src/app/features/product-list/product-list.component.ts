import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductInfoComponent } from '../product-info/product-info.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { FiltersComponent } from './filters/filters.component';
import { Store } from '@ngrx/store';
import { loadProducts } from '../../store/products/products.actions';
import { selectAllProducts } from '../../store/products/products.selector';
import { AppState } from '../../store/state.model';
import { CommonModule } from '@angular/common';
import { Product } from '../../core/types/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ButtonComponent, FiltersComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  start: number = 0;
  page: number = 1;
  limit: number = 10;
  isLoading: boolean = false;
  isFilterCollapsed = false;
  products$ = this.store.select(selectAllProducts);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
    this.products$ = this.store.select(selectAllProducts);
  }

  toggleFilter() {
    this.isFilterCollapsed = !this.isFilterCollapsed;
    const filterPanel = document.querySelector('.filter-panel') as HTMLElement;
    if (this.isFilterCollapsed) {
      filterPanel.classList.add('collapsed');
    } else {
      filterPanel.classList.remove('collapsed');
    }
  }

  openDialog(product: any) {
    this.dialog.open(ProductInfoComponent, {
      maxWidth: 1200,
      data: {
        product: product,
      },
    });
  }

  addToCart(product: Product) {}
}
