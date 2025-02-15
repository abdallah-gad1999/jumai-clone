import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { FlashSalesComponent } from './components/flash-sales/flash-sales.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { OffersComponent } from './offers.component';
import { NavComponent } from '../public/components/home/nav/nav.component';
import { NavSec2Component } from '../shared/components/nav-sec2/nav-sec2.component';

@NgModule({
  declarations: [OffersComponent],
  imports: [
    CommonModule,
    OffersRoutingModule,
    FlashSalesComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    NavSec2Component,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OffersModule {}
