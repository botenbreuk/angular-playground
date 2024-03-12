import { FormsModule } from '@angular/forms';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.scss',
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class ProductAlertsComponent {
  @Input() product?: Product;
  @Output() notify = new EventEmitter();
}
