import { Directive, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user';
import { CartService } from '../ordering/cart/cart.service';
import { ProductService } from './product.service';
import { Product } from './products';
@Directive({
  selector: '[product-list]',
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  products: Product[];
  currentUser?: User;

  constructor(
    protected cartService: CartService,
    protected productService: ProductService,
    protected authService: AuthService
  ) {
    this.products = [];
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.retrieveProducts();
    this.currentUser = this.authService.getCurrentUser();
  }

  getCurrentUser() {
    console.log(this.currentUser);
    return this.currentUser;
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
