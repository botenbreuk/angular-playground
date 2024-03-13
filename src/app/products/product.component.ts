import { Directive, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';
import { Product } from './products';
@Directive({
  selector: '[product-list]',
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  products: Product[];

  constructor(
    protected cartService: CartService,
    protected productService: ProductService
  ) {
    this.products = [];
  }

  ngOnInit() {
    this.retrieveProducts();
  }

  retrieveProducts() {
    this.productService.findAll().subscribe(products => {
      this.products = products;
      console.log(products);
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Product added to cart!');
  }
}
