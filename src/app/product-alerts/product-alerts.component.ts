import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.scss',
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class ProductAlertsComponent {
  @Input() product?: Product;
  @Output() notify = new EventEmitter();
}
