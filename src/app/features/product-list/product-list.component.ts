import { Component, HostListener, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductInfoComponent } from '../product-info/product-info.component';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../core/types/product';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  products: Product[] = [];
  start: number = 0;
  page: number = 1;
  limit: number = 10;
  isLoading: boolean = false;

  constructor(private productsService: ProductsService) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight
    ) {
      this.loadProducts();
    }
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    if (this.isLoading) return;

    this.isLoading = true;
    this.productsService
      .getProducts(this.start, this.page, this.limit)
      .subscribe((data) => {
        this.products = [...this.products, ...data];
        this.start += this.limit;
        this.page++;
        this.isLoading = false;
      });
  }

  openDialog(product: any) {
    this.dialog.open(ProductInfoComponent, {
      maxWidth: 1200,
      data: {
        product: product,
      },
    });
  }
}
