import { Component, HostListener, OnInit } from '@angular/core';
import { OrderSummaryComponent } from '../order-summary/order-summary.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Iorder } from '../../model/iorder';
import { Store } from '@ngrx/store';
import { selectOrderItem } from '../../../store/order/Order-selector';
import { FormsModule } from '@angular/forms';
import { CheckOutService } from '../../services/check-out.service';

@Component({
  selector: 'app-check-payment',
  standalone: true,
  imports: [OrderSummaryComponent, CommonModule, FormsModule],
  templateUrl: './check-payment.component.html',
  styleUrl: './check-payment.component.css',
})
export class CheckPaymentComponent implements OnInit {
  isMobile!: boolean;
  order$!: Observable<Iorder | null>;
  selectPayment!: string;
  constructor(private store: Store, private CheckOutService: CheckOutService) {
    this.order$ = this.store.select(selectOrderItem);
  }
  ngOnInit(): void {
    this.onResize();
  }

  @HostListener('window:resize', []) onResize() {
    this.isMobile = window.innerWidth < 992;
  }

  confirmPayment() {
    this.CheckOutService.confirmPayment(this.selectPayment);
  }
}
