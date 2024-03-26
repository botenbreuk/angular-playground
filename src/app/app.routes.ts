import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { CartComponent } from './ordering/cart/cart.component';
import { OrderComponent } from './ordering/order/order.component';
import { productRoutes } from './products/product.routes';

export const routes: Routes = [
  ...productRoutes,
  { path: 'cart', component: CartComponent },
  { path: 'login', component: AuthComponent },
  { path: 'order', component: OrderComponent, canActivate: [AuthGuard] }
];
