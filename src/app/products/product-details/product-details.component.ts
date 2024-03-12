import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  product?: Product;

  @Input()
  set productId(id: string) {
    this.product = products.find(v => v.id === Number(id));
  }
}
