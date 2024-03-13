import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductListComponent } from './products/product-list/product-list.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products/create', component: ProductCreateComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent }
];
