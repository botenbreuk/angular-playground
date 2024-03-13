import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl('')
  });

  constructor(private cartService: CartService) {}

  onSubmit(): void {
    let products = this.cartService.getProducts();
    console.warn('Your order has been received');
    console.log(this.cartForm.value);
    console.log(this.cartService.getProducts());
    products = this.cartService.clearCart();
    this.cartForm.reset();
  }

  getProducts() {
    return this.cartService.getProducts();
  }

  clearCart() {
    this.cartService.clearCart();
  }

  totalPrice() {
    let total = 0;
    this.cartService.getProducts().forEach(product => {
      total += product.price;
    });
    return total;
  }
}
