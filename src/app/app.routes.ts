import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart/cart.component';
import { productRoutes } from './products/product.routes';
import { ShippingComponent } from './shipping/shipping.component';

export const routes: Routes = [
  ...productRoutes,
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent }
];
