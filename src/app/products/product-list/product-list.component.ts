import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterLink } from '@angular/router';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';
import { ProductComponent } from '../product.component';

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
  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
