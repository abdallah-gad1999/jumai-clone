import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { CheckNavComponent } from './components/check-nav/check-nav.component';
import { CheckHeaderComponent } from './components/check-header/check-header.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CheckAdressComponent } from './components/address/check-adress/check-adress.component';
import { DeliveryComponent } from '../public/components/product-details/delivery/delivery.component';
import { CheckDeleveryComponent } from './components/check-delevery/check-delevery.component';
import { CheckPaymentComponent } from './components/check-payment/check-payment.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { HeaderFixedDirective } from '../shared/directive/header-fixed/header-fixed.directive';
import { CheckEditComponent } from './components/address/check-edit/check-edit.component';

@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    CheckNavComponent,
    CheckHeaderComponent,
    RouterOutlet,
    CheckAdressComponent,
    DeliveryComponent,
    CheckDeleveryComponent,
    CheckPaymentComponent,
    OrderSummaryComponent,
    HeaderFixedDirective,
    RouterModule,
    CheckEditComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CheckoutModule {}
