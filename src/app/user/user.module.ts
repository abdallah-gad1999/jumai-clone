import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HeaderComponent } from '../shared/components/header/header.component';
import { UserComponent } from './user.component';
import { NavSec2Component } from '../shared/components/nav-sec2/nav-sec2.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { MainContnetComponent } from './components/main-contnet/main-contnet.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HeaderComponent,
    NavSec2Component,
    FooterComponent,
    SideBarComponent,
    MainContnetComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserModule {}
