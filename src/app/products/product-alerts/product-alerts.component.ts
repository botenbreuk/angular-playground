import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.scss',
  standalone: true,
  imports: [FormsModule, CommonModule, MatButtonModule]
})
export class ProductAlertsComponent {
  @Input() product?: Product;
  @Output() notify = new EventEmitter();
}
