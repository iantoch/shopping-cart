import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductInfoComponent } from '../product-info/product-info.component';
import { FiltersComponent } from './filters/filters.component';
import { Store } from '@ngrx/store';
import { loadProducts } from '../../store/products/products.actions';
import {
  selectAllProducts,
  selectCurrentPage,
} from '../../store/products/products.selector';
import { AppState } from '../../store/state.model';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Filters } from '../../core/types/filters';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FiltersComponent, InfiniteScrollModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  page: number = 1;
  limit: number = 10;
  isFilterCollapsed = false;
  currentPage$ = this.store.select(selectCurrentPage);
  currentPage = 0;
  products$ = this.store.select(selectAllProducts);
  filters?: Filters;

  constructor(private store: Store<AppState>) {
    this.currentPage$.subscribe((page) => {
      this.currentPage = page;
    });
  }

  ngOnInit(): void {
    this.store.dispatch(
      loadProducts({
        page: this.currentPage,
        limit: this.limit,
      })
    );
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

  handleFilters(filters: Filters) {
    this.filters = filters;
    this.store.dispatch(
      loadProducts({
        page: this.currentPage,
        limit: this.limit,
        filters: filters,
      })
    );
  }

  openDialog(product: any) {
    this.dialog.open(ProductInfoComponent, {
      maxWidth: 1200,
      maxHeight: 800,
      data: {
        product: product,
      },
    });
  }

  onScrollDown() {
    this.store.dispatch(
      loadProducts({
        page: this.currentPage + 1,
        limit: this.limit,
        filters: this.filters,
      })
    );
  }
}
