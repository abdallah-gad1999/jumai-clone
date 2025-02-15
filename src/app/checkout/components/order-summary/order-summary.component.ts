import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Iorder } from '../../model/iorder';
import { Store } from '@ngrx/store';
import { selectOrderItem } from '../../../store/order/Order-selector';
import { CheckOutService } from '../../services/check-out.service';
import { CartService } from '../../../public/components/cart/services/cart/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css',
})
export class OrderSummaryComponent {
  order$!: Observable<Iorder | null>;
  id!: string | null;
  constructor(
    private store: Store,
    private CheckOutService: CheckOutService,
    private CartService: CartService
  ) {
    this.order$ = this.store.select(selectOrderItem);
    this.store.select(selectOrderItem).subscribe({
      next: (order) => {
        if (order) {
          this.id = order?.id;
        }
      },
    });
  }

  confirmorder() {
    this.CheckOutService.confirmorder()
  }
}
