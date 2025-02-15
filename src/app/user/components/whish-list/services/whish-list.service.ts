import { Injectable } from '@angular/core';
import {
  DocumentReference,
  Firestore,
  collection,
  deleteField,
  doc,
  getDoc,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { selectUid } from '../../../../store/auth/userState/userState.selector';
import { Observable, from, switchMap, of, tap } from 'rxjs';
import { NotificationServiceService } from '../../../../shared/services/NotificationService/notification-service.service';

@Injectable({
  providedIn: 'root',
})
export class WhishListService {
  constructor(
    private store: Store,
    private firestore: Firestore,
    private notification: NotificationServiceService
  ) {}

  AddToFav(id: string): Observable<any> {
    return this.store.select(selectUid).pipe(
      switchMap((uid) => {
        if (!uid) return of(null);

        const favRef = doc(this.firestore, `wishList/${uid}`);

        return from(getDoc(favRef)).pipe(
          switchMap((docSnap) => {
            if (docSnap.exists()) {
              const product = docSnap.data();
              if (product?.[id]) {
                return from(updateDoc(favRef, { [id]: deleteField() })).pipe(
                  tap(() =>
                    this.notification.showSuccess(
                      'تم ازالة المنتج من قائمة المفضلة'
                    )
                  )
                );
              } else {
                return from(updateDoc(favRef, { [id]: true })).pipe(
                  tap(() =>
                    this.notification.showSuccess(
                      'تم اضافة المنتج الي قائمة المفضلة'
                    )
                  )
                );
              }
            } else {
              return from(setDoc(favRef, { [id]: true })).pipe(
                tap(() =>
                  this.notification.showSuccess(
                    'تم اضافة المنتج الي قائمة المفضلة'
                  )
                )
              );
            }
          })
        );
      })
    );
  }
  getWishlistProducts(): Observable<any> {
    return new Observable((observer) => {
      this.store.select(selectUid).subscribe((uid) => {
        if (!uid) {
          observer.next([]);
          return;
        }

        const wishListRef = doc(this.firestore, `wishList/${uid}`);

        onSnapshot(wishListRef, (docSnap) => {
          if (docSnap.exists()) {
            const wishlistData = docSnap.data();

            if (wishlistData) {
              const productIds = Object.keys(wishlistData);

              if (productIds.length > 0) {
                const productsRef = collection(this.firestore, 'products');

                const productQuery = query(
                  productsRef,
                  where('__name__', 'in', productIds)
                );

                onSnapshot(productQuery, (querySnap) => {
                  const products = querySnap.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                  }));
                  observer.next(products);
                });
              } else {
                observer.next([]);
              }
            }
          } else {
            observer.next([]);
          }
        });
      });
    });
  }
}
