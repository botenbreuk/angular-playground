import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CartService } from '../../cart/cart.service';
import { ProductComponent } from '../product.component';
import { ProductService } from '../product.service';
import { Product } from '../products';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent extends ProductComponent {
  product?: Product;

  constructor(cartService: CartService, productService: ProductService) {
    super(cartService, productService);
  }

  @Input()
  set productId(id: number) {
    this.productService.findById(id).subscribe(product => {
      this.product = product;
    });
  }
}
