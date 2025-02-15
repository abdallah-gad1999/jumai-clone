import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../../model/products/iproduct';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent implements OnInit {
  @Input() products: Iproduct[] | null = null;
  @Input() title!: string;
  @Input() color!: string;
  @Input() textColor!: string;

  constructor(private router: Router) {}
  ngOnInit(): void {}

  scrollRight(container: HTMLElement) {
    container.scrollBy({ left: +200, behavior: 'smooth' });
  }
  scrollLeft(container: HTMLElement) {
    container.scrollBy({ left: -200, behavior: 'smooth' });
  }

  calculateDiscountedPrice(price: number, discount: number): number {
    return price - (price * discount) / 100;
  }

  navigate(prdId: string) {
   this.router.navigateByUrl(`/public/details/${prdId}`);
  }
}
