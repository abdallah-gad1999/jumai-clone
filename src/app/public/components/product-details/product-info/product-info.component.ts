import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../../../shared/model/products/iproduct';
import { Observable, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Firestore } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { CartService } from './../../cart/services/cart/cart.service';
import { WhishListService } from '../../../../user/components/whish-list/services/whish-list.service';
import { AddProduct } from '../../../../store/cart/cart-action';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.css',
})
export class ProductInfoComponent implements OnInit {
  product$!: Iproduct; // Updated for clarity
  loading$!: Observable<boolean>;
  uid!: Observable<string | null>;

  constructor(
    private store: Store,
    private ActivatedRoute: ActivatedRoute,
    private Firestore: Firestore,
    private cartService: CartService,
    private wishList: WhishListService
  ) {}
  ngOnInit(): void {
    this.product$ = this.ActivatedRoute.snapshot.data['productData'];
    this.cartService.getProductDetails().subscribe({
      next: (state) => console.log(state),
      error: (err) => console.error('Error adding product:', err),
    });



  }

  calculateDiscount(price: number, discount: number): number {
    return price - (price * discount) / 100;
  }

  calculateCartTotal(): Observable<number> {
  return this.cartService.getProductDetails().pipe(
    map((products) => {
      // حساب التوتال
      return products.reduce((total:number, product:Iproduct) => {
        const discountedPrice = this.calculateDiscount(product.price, product.discount || 0);
        return total + discountedPrice * product.qty; // ضرب السعر بعد الخصم في الكمية
      }, 0); // البداية من صفر
    })
  );
}



  addtoCart(id: string) {
    this.store.dispatch(AddProduct({ prdId: id, qty: 1 }));
  }
  removeFromCart(id: string) {
    this.cartService.decreaseQty(id).subscribe({
      next: () => console.log('Product added to cart successfully!'),
      error: (err) => console.error('Error adding product:', err),
    });
  }

  removeItem(id: string) {
    this.cartService.removeItem(id).subscribe({
      next: () => console.log('Product added to cart successfully!'),
      error: (err) => console.error('Error adding product:', err),
    });
  }




}
