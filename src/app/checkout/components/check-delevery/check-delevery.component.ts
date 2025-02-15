import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectOrderItem } from '../../../store/order/Order-selector';
import { Observable } from 'rxjs';
import { Iorder } from '../../model/iorder';
import { FormsModule } from '@angular/forms';
import { CheckOutService } from '../../services/check-out.service';
@Component({
  selector: 'app-check-delevery',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './check-delevery.component.html',
  styleUrl: './check-delevery.component.css',
})
export class CheckDeleveryComponent {
  order$!: Observable<Iorder | null>;
  selectedDelivery: string = 'Home';
  ordId!: string;
  constructor(private store: Store, private CheckOutService: CheckOutService) {
    this.order$ = this.store.select(selectOrderItem);
  }

  confirmDelivery() {
    this.CheckOutService.confirmDelivery(this.selectedDelivery);
  }
}
