import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { CheckAdressComponent } from './components/address/check-adress/check-adress.component';
import { CheckDeleveryComponent } from './components/check-delevery/check-delevery.component';
import { CheckPaymentComponent } from './components/check-payment/check-payment.component';
import { CheckEditComponent } from './components/address/check-edit/check-edit.component';
import { AddressComponent } from './components/address/address.component';
import { checkOutResolver } from './resolvers/check-out.resolver';

const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
    children: [
      {
        path: 'address',
        component: AddressComponent,
        resolve: { order: checkOutResolver },
        children: [
          { path: '', component: CheckAdressComponent },
          { path: 'edit', component: CheckEditComponent }, 
        ],
      },
      { path: 'delevry', component: CheckDeleveryComponent },
      { path: 'payment', component: CheckPaymentComponent },
      { path: '', pathMatch: 'full', redirectTo: '/checkout/address' }, // استخدام مسار نسبي
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {}
