import { Injectable } from '@angular/core';
import { Product } from '../../products/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = [];

  addToCart(product: Product) {
    this.products.push(product);
    const productJSON = JSON.stringify(product);
    localStorage.setItem('products', productJSON);
  }

  getProducts() {
    return this.products;
  }

  removeProduct(product: Product) {
    this.products = this.products.filter(p => p !== product);
    const productJSON = JSON.stringify(this.products);
    localStorage.setItem('products', productJSON);
  }
}
