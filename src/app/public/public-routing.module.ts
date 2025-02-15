import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { productResolver } from './components/product-details/resolvers/product.resolver';
import { cartResolver } from './components/cart/resolver/cart.resolver';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/public/home',
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./components/cart/cart.component').then(
            (m) => m.CartComponent
          ),
        resolve: {
          cartData: cartResolver,
        },
      },
      {
        path: 'details/:id',
        loadComponent: () =>
          import('./components/product-details/product-details.component').then(
            (m) => m.ProductDetailsComponent
          ),
        resolve: {
          productData: productResolver, // ربط الـ Resolver
        },
      },
      {
        path: 'products',
        component: ProductsComponent, // يدعم التنقل بدون معرف
      },
      {
        path: 'products/:id',
        component: ProductsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
