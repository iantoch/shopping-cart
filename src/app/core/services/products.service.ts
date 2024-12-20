import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../types/product';
import { Filters } from '../types/filters';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000/products';

  getProducts(
    page: number = 1,
    limit: number = 10,
    filters?: Filters
  ): Observable<Product[]> {
    let params = new HttpParams().set('_page', page).set('_limit', limit);

    if (filters?.search) {
      params = params.set('name', filters.search);
    }
    if (filters?.selectedType) {
      let type = filters.selectedType === 'All' ? '' : filters.selectedType;
      params = params.set('type', type);
    }
    if (filters?.priceRanges) {
      filters.priceRanges.forEach((range: { gte: number; lte: number }) => {
        params = params.set('price_gte', range.gte).set('price_lte', range.lte);
      });
    }
    return this.http.get<Product[]>(this.apiUrl, { params });
  }
}
