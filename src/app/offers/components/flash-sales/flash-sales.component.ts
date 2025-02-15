import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProductsService } from '../../../shared/services/products/products.service';
import { Observable, of } from 'rxjs';
import { Iproduct } from '../../../shared/model/products/iproduct';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../../../shared/services/loading/loading.service';
import { Router } from '@angular/router';
import { WhishListService } from '../../../user/components/whish-list/services/whish-list.service';
import { Store } from '@ngrx/store';
import { AddProduct } from '../../../store/cart/cart-action';
@Component({
  selector: 'app-flash-sales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flash-sales.component.html',
  styleUrl: './flash-sales.component.css',
})
export class FlashSalesComponent {
  FlashSale!: Observable<Iproduct[]>;
  wishlist: any = {};

  constructor(
    private title: Title,
    private ProductsService: ProductsService,
    private loadService: LoadingService,
    private router: Router,
    private WhishListService: WhishListService,
    private store: Store
  ) {
    this.title.setTitle('عروض فلاش سيل اليومية من جوميا استمتع بالتسوق');
    this.loadService.show();
    this.ProductsService.getProductsByQuery([
      { field: 'FlashSale', operator: '==', value: true },
    ]).subscribe((products) => {
      this.FlashSale = of(products);
      this.loadService.hide();
    });

    this.WhishListService.getWishlistProducts().subscribe((wishlist) => {
      this.wishlist = wishlist || {};
    });
  }

  AddToFav(id: string) {
    this.WhishListService.AddToFav(id).subscribe();
  }

  calculateDiscountedPrice(price: number, discount: number): number {
    return price - (price * discount) / 100;
  }

  navigate(prdId: string) {
    this.router.navigateByUrl(`/public/details/${prdId}`);
  }
  addtoCart(id: string) {
    this.store.dispatch(AddProduct({ prdId: id, qty: 1 }));
  }
}
