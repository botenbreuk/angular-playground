import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [CurrencyPipe, AsyncPipe],
  templateUrl: './shipping.component.html'
})
export class ShippingComponent {
  shippingCosts!: Observable<{ type: string; price: number }[]>;

  constructor(cartService: CartService) {
    this.shippingCosts = cartService.getShippingPrices();
  }
}
