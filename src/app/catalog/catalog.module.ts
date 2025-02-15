import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { SideFilterComponent } from './components/side-filter/side-filter.component';
import { ProductsComponent } from './components/products/products.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { NavSec2Component } from '../shared/components/nav-sec2/nav-sec2.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { NavComponent } from '../public/components/home/nav/nav.component';

@NgModule({
  declarations: [CatalogComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    SideFilterComponent,
    ProductsComponent,
    HeaderComponent,
    NavSec2Component,
    FooterComponent,
    NavComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CatalogModule {}
