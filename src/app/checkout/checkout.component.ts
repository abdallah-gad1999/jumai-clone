import { Component, HostListener, OnInit } from '@angular/core';
import { NavComponent } from '../public/components/home/nav/nav.component';
import { ActivatedRoute } from '@angular/router';
import { CheckOutService } from './services/check-out.service';
import { Observable } from 'rxjs';
import { Iorder } from './model/iorder';
import { Store } from '@ngrx/store';
import { loadorder } from '../store/order/Order-action';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent implements OnInit {
  isMobile: any;
  order!: Observable<Iorder>;

  constructor(
    private route: ActivatedRoute,
    private CheckOutService: CheckOutService,
    private store: Store
  ) {}

  @HostListener('window:resize', []) onResize() {
    this.isMobile = window.innerWidth < 992;
    console.log(this.isMobile);
  }

  ngOnInit(): void {
    this.onResize();
  }
}
