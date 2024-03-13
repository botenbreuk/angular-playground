import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [CurrencyPipe, AsyncPipe],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.scss'
})
export class ShippingComponent {
  shippingCosts!: Observable<{ type: string; price: number }[]>;

  private cartService = inject(CartService);

  constructor() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
