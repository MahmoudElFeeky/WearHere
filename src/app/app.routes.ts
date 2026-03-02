import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CartPage } from './pages/cart/cart';
import { AdminPage } from './pages/admin/admin';
import { ProductDetails } from './pages/product-details/product-details';
import { adminGuard } from './guards/admin-guard';
import { LoginPage } from './pages/login/login';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'cart', component: CartPage },
  { path: 'login', component: LoginPage },
  { path: 'admin', component: AdminPage, canActivate: [adminGuard] },
  { path: 'product/:id', component: ProductDetails },
  { path: '**', redirectTo: '' }
];
