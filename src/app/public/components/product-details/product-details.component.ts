import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';
import { ProductImagesComponent } from './product-images/product-images.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { ProductOffersComponent } from './product-offers/product-offers.component';
import { ProductSpecificationsComponent } from './product-specifications/product-specifications.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
import { CartBtnComponent } from './cart-btn/cart-btn.component';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../../../shared/services/products/products.service';
import { Store } from '@ngrx/store';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    ProductImagesComponent,
    ProductInfoComponent,
    DeliveryComponent,
    ProductOffersComponent,
    ProductSpecificationsComponent,
    SellerInfoComponent,
    ProductReviewsComponent,
    CartBtnComponent,
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  prdId!: string | null;
  productData: any;
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private ProductsService: ProductsService,
    private store: Store,
    private titleServise: Title
  ) {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    this.productData = this.ActivatedRoute.snapshot.data['productData']; // قراءة البيانات من الـ Resolver
    this.titleServise.setTitle(this.productData.name);
  }
}
