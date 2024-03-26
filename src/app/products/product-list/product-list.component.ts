import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { CartService } from '../../ordering/cart/cart.service';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';
import { ProductComponent } from '../product.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    ProductAlertsComponent,
    MatButtonModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class ProductListComponent extends ProductComponent {
  constructor(
    cartService: CartService,
    productService: ProductService,
    authService: AuthService
  ) {
    super(cartService, productService, authService);
  }
}
