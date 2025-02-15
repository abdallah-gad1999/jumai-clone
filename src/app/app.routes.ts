import { Routes } from '@angular/router';
import { userGuard } from './shared/guards/user/user.guard';
import { authGuard } from './shared/guards/auth/auth.guard';
import { cartResolver } from './public/components/cart/resolver/cart.resolver';
export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((c) => c.AuthModule),
    canActivate: [authGuard],
  },
  {
    path: 'public',
    loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule),
    resolve: { cart: cartResolver },
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    // canActivate: [userGuard],
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./checkout/checkout.module').then((m) => m.CheckoutModule),
  },
  {
    path: 'catalog',
    loadChildren: () =>
      import('./catalog/catalog.module').then((m) => m.CatalogModule),
  },
  {
    path: 'offers',
    loadChildren: () =>
      import('./offers/offers.module').then((m) => m.OffersModule),
  },
  {
    path: 'Admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '', pathMatch: 'full', redirectTo: '/public' },
];
