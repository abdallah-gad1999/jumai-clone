import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  AddProduct,
  AddToCartFailure,
  AddToCartSuccess,
  decreaseItem,
  decreaseItemFailure,
  decreaseItemSuccess,
  getPrdFromCart,
  getPrdFromCartFaiulre,
  getPrdFromCartSuccess,
  removeItem,
  removeItemFailure,
  removeItemSuccess,
} from './cart-action';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { CartService } from './../../public/components/cart/services/cart/cart.service';
import { NotificationServiceService } from '../../shared/services/NotificationService/notification-service.service';

@Injectable()
export class CartEffects {
  private actions$ = inject(Actions);
  private cartService = inject(CartService);
  private notification = inject(NotificationServiceService);

  // Add Product to Cart
  addToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddProduct),
      mergeMap((action) =>
        this.cartService.addToCart(action.prdId, action.qty).pipe(
          map(
            () => AddToCartSuccess(),
            this.notification.showSuccess('تمت اضافة المنتج بنجاح')
          ), // إذا تمت الإضافة بنجاح
          catchError((error) =>
            of(AddToCartFailure({ error: 'Failed to add product to cart' }))
          )
        )
      )
    )
  );

  // Decrease Item Quantity in Cart
  decreaseItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(decreaseItem),
      mergeMap((action) =>
        this.cartService.decreaseQty(action.prdId).pipe(
          map(
            () => decreaseItemSuccess({ prdId: action.prdId }),
            this.notification.showSuccess('تمت تغيير كمية المنتج بنجاح')
          ), // إذا نجحت العملية
          catchError((error) =>
            of(
              decreaseItemFailure({ error: 'Failed to decrease item quantity' })
            )
          )
        )
      )
    )
  );

  // Remove Item from Cart
  removeItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeItem),
      mergeMap((action) =>
        this.cartService.removeItem(action.prdId).pipe(
          tap(() => this.notification.showSuccess('🗑️ تمت إزالة المنتج بنجاح')),
          map(() => removeItemSuccess({ prdId: action.prdId })), // إذا تمت الإزالة بنجاح
          catchError((error) =>
            of(removeItemFailure({ error: 'Failed to remove item from cart' })).pipe(
              tap(()=> this.notification.showError('❌ فشل في إزالة المنتج'))
            )
          )
        )
      )
    )
  );

  // Get All Items in Cart
}
