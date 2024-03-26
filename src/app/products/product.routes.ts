import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

export const productRoutes: Routes = [
  { path: '', component: ProductListComponent },
  {
    path: 'products/create',
    component: ProductCreateComponent,
    canActivate: [AuthGuard]
  },
  { path: 'products/:productId', component: ProductDetailsComponent }
];
