import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffersComponent } from './offers.component';
import { FlashSalesComponent } from './components/flash-sales/flash-sales.component';

const routes: Routes = [
  {
    path: '',
    component: OffersComponent,
    children: [
      {
        path: 'flash-sales',
        component: FlashSalesComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/offers/flash-sales',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffersRoutingModule {}
