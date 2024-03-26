import { Injectable } from '@angular/core';
import { Product } from '../../products/products';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  products: Product[] = [];

  clearCart() {
    this.products = [];
    localStorage.removeItem('products');
    return this.products;
  }
}
