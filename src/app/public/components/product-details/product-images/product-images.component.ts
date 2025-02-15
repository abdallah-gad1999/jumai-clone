import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Iproduct } from '../../../../shared/model/products/iproduct';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PopUpDirective } from '../../../../shared/directive/popup/pop-up.directive';

@Component({
  selector: 'app-product-images',
  standalone: true,
  imports: [CommonModule,PopUpDirective],
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.css'], // Corrected typo
  changeDetection: ChangeDetectionStrategy.OnPush, // Added for performance
})
export class ProductImagesComponent implements OnInit {
  product$!: Iproduct; // Updated for clarity
  loading$!: Observable<boolean>;
  @ViewChild('active') activeImg!: ElementRef;
  constructor(private store: Store, private ActivatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.product$ = this.ActivatedRoute.snapshot.data['productData'];
    console.log(this.product$);
  }

  changeImg(src: string) {
    this.activeImg.nativeElement.src = src;
  }
}
