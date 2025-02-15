import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MainCarouselComponent } from './components/home/main-carousel/main-carousel.component';
import { InpoxComponent } from './components/home/inpox/inpox.component';

import { FooterComponent } from '../shared/components/footer/footer.component';
import { Sec1Component } from './components/banners/sec-1/sec-1.component';
import { SideBarComponent } from './components/home/side-bar/side-bar.component';
import { NavComponent } from './components/home/nav/nav.component';
import { NavSec2Component } from '../shared/components/nav-sec2/nav-sec2.component';
import { SliderComponent } from '../shared/components/slider/slider.component';
@NgModule({
  declarations: [PublicComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    HeaderComponent,
    HomeComponent,
    MainCarouselComponent,
    InpoxComponent,
    FooterComponent,
    SideBarComponent,
    NavComponent,
    NavSec2Component,
    SliderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PublicModule {}
