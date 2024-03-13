import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';
import { ProductComponent } from '../product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  imports: [RouterLink, CommonModule, ProductAlertsComponent]
})
export class ProductListComponent extends ProductComponent {
  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
