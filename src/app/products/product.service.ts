import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl: string;

  constructor(private http: HttpClient) {
    this.productUrl = '/api/products';
  }

  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }

  public findById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.productUrl}/${id}`);
  }

  public save(product?: Product) {
    return this.http.post<Product>(this.productUrl, { ...product });
  }
}
