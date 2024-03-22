import { Routes } from '@angular/router';
import { AuthGuard } from './authentication/authgaurd';
import { LoginComponent } from './authentication/login/login.component';
import { CartComponent } from './cart/cart/cart.component';
import { productRoutes } from './products/product.routes';
import { ShippingComponent } from './shipping/shipping.component';

export const routes: Routes = [
  ...productRoutes,
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'shipping', component: ShippingComponent },
  { path: 'login', component: LoginComponent }
];
