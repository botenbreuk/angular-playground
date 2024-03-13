import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../products/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private http = inject(HttpClient);

  items: Product[] = [];

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>('/assets/shipping.json');
  }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
