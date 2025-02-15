import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { CreateAccountDetailsComponent } from './components/create-account-details/create-account-details.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'logIn', component: LogInComponent },
      { path: 'createAccount', component: CreateAccountComponent },
      { path: 'accountDetails', component: CreateAccountDetailsComponent },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/auth/logIn',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
