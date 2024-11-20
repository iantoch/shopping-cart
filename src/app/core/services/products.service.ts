import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000/products';

  getProducts(
    start: number = 0,
    page: number,
    limit: number
  ): Observable<Product[]> {
    const params = new HttpParams()
      .set('_start', start.toString())
      .set('_page', page.toString())
      .set('_limit', limit.toString());
    return this.http.get<Product[]>(this.apiUrl, { params });
  }
}
