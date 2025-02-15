import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LogInComponent } from './components/log-in/log-in.component';
import { AuthComponent } from './auth.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [AuthComponent],  // إضافة LogInComponent إلى هنا
  imports: [CommonModule, AuthRoutingModule,LogInComponent,RouterOutlet,RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // يمكن إزالة هذا إذا كنت قد أضفت LogInComponent في `declarations`
})
export class AuthModule {}
