import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectOrderItem } from '../../../../store/order/Order-selector';
import { Iorder } from '../../../model/iorder';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-check-adress',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './check-adress.component.html',
  styleUrl: './check-adress.component.css',
})
export class CheckAdressComponent implements OnInit {
  order$!: Observable<Iorder | null>;
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.order$ = this.store.select(selectOrderItem);
  }
}
