import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadAllOrder } from '../../../store/order/Order-action';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],

  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent implements OnInit {
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(loadAllOrder());
  }
}
