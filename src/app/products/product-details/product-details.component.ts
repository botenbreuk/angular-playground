import { CurrencyPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from '../../cart/cart.service';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe, MatButtonModule],
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent {
  private cartService = inject(CartService);

  product?: Product;

  @Input()
  set productId(id: string) {
    this.product = products.find(v => v.id === Number(id));
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
