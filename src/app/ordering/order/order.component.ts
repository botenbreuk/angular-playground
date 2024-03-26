import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../cart/cart.service';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  orderForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl('')
  });

  constructor(
    private orderService: OrderService,
    private cartService: CartService
  ) {}

  onSubmit(): void {
    let products = this.cartService.getProducts();
    console.warn('Your order has been received');
    products = this.orderService.clearCart();
    this.orderForm.reset();
  }
}
