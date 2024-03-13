import { Injectable } from '@angular/core';
import { Product } from '../products/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = [];

  addToCart(product: Product) {
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  clearCart() {
    this.products = [];
    return this.products;
  }
}
