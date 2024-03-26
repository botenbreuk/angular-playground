import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Product } from '../../products/products';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  constructor(private cartService: CartService) {}

  getProducts() {
    return this.cartService.getProducts();
  }

  removeProduct(product: Product) {
    this.cartService.removeProduct(product);
  }

  totalPrice() {
    let total = 0;
    this.cartService.getProducts().forEach(product => {
      total += product.price;
    });
    return total;
  }
}
