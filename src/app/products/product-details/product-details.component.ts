import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { CartService } from '../../ordering/cart/cart.service';
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

  constructor(
    cartService: CartService,
    productService: ProductService,
    authService: AuthService
  ) {
    super(cartService, productService, authService);
    console.log(authService.getCurrentUser);
  }

  @Input()
  set productId(id: number) {
    this.productService.findById(id).subscribe(product => {
      this.product = product;
    });
  }
}
