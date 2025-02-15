import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Iorder } from '../../../../checkout/model/iorder';
import { Store } from '@ngrx/store';
import { selectOrders } from '../../../../store/order/Order-selector';
import { CommonModule } from '@angular/common';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { loadAllOrder } from '../../../../store/order/Order-action';
import { CheckOutService } from '../../../../checkout/services/check-out.service';
import { LoadingService } from '../../../../shared/services/loading/loading.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-orders-success',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './orders-success.component.html',
  styleUrl: './orders-success.component.css',
})
export class OrdersSuccessComponent implements OnInit {
  order$!: Iorder[];
  private auth = getAuth();
  constructor(
    private store: Store,
    private checkOut: CheckOutService,
    private LoadingService: LoadingService,private title:Title
  ) {
    this.store.dispatch(loadAllOrder());
    this.title.setTitle('الطلبات الصحيحة')
  }
  ngOnInit(): void {
    this.store.select(selectOrders).subscribe({
      next: (state) => {
        this.order$ = state;
        console.log(state);
      },
    });
  }
}
