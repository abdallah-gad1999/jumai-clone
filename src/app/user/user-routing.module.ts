import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { AccountComponent } from './components/account/account.component';
import { OrderComponent } from './components/order/order.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { OrdersSuccessComponent } from './components/order/orders-success/orders-success.component';
import { OrdersCancledComponent } from './components/order/orders-cancled/orders-cancled.component';
import { VouchersComponent } from './components/vouchers/vouchers.component';
import { WhishListComponent } from './components/whish-list/whish-list.component';
import { ReviewsRateComponent } from './components/reviews-rate/reviews-rate.component';
import { ActiveComponent } from './components/vouchers/active/active.component';
import { InActiveComponent } from './components/vouchers/in-active/in-active.component';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'account',
        component: AccountComponent,
      },
      {
        path: 'order',
        loadComponent: () =>
          import('./components/order/order.component').then(
            (m) => m.OrderComponent
          ),

        children: [
          { path: 'success', component: OrdersSuccessComponent },
          { path: 'cancled', component: OrdersCancledComponent },
          { path: '', pathMatch: 'full', redirectTo: '/user/order/success' },
        ],
      },
      {
        path: 'message',
        component: MessageBoxComponent,
      },
      {
        path: 'vouchers',
        component: VouchersComponent,
        children: [
          { path: 'active', component: ActiveComponent },
          { path: 'inActive', component: InActiveComponent },
          { path: '', pathMatch: 'full', redirectTo: '/user/vouchers/active' },
        ],
      },
      {
        path: 'wishList',
        component: WhishListComponent,
      },
      {
        path: 'reviews',
        component: ReviewsRateComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/user/account',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
