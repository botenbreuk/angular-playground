import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../products';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent {
  product?: Product;

  constructor(private productService: ProductService) {}

  createProductForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl()
  });

  onSave() {
    this.product = this.createProductForm.value as Product;
    this.productService.save(this.product).subscribe(product => {
      this.product = product;
    });
  }
}
