import { AfterContentInit, Injectable, OnInit } from '@angular/core';
import {
  CollectionReference,
  DocumentReference,
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { Observable, catchError, filter, from, map, of, switchMap } from 'rxjs';
import { selectUid } from '../../store/auth/userState/userState.selector';
import { ActivatedRoute, Router } from '@angular/router';
import { Iorder } from '../model/iorder';
import { selectOrderItem } from '../../store/order/Order-selector';
import { NotificationServiceService } from './../../shared/services/NotificationService/notification-service.service';
import { getAuth } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class CheckOutService implements OnInit, AfterContentInit {
  collectionRef!: CollectionReference;
  uid!: string | null;
  order$: Observable<Iorder | null> = of(null);
  ordId!: string | undefined;
  orderRef!: DocumentReference;
  constructor(
    private firestore: Firestore,
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private notification: NotificationServiceService
  ) {
    const auth = getAuth();
    const user = auth.currentUser;

    this.store.select(selectOrderItem).subscribe((id) => (this.ordId = id?.id));
  }
  ngAfterContentInit(): void {
    this.store.select(selectUid).subscribe((id) => (this.uid = id));
  }

  ngOnInit(): void {}

  createOrder(cartItems: any) {
    this.store.select(selectUid).subscribe((id) => (this.uid = id));

    this.collectionRef = collection(this.firestore, 'orders');

    const newOrder = {
      ...cartItems,
      state: 'pending',
      step: '',
      userid: this.uid,
      createAt: new Date(),
    };

    const pendingQuery = query(
      this.collectionRef,
      where('userid', '==', this.uid),
      where('state', '==', 'pending')
    );

    from(getDocs(pendingQuery))
      .pipe(
        switchMap((prd) => {
          if (!prd.empty) {
            const orderRef = prd.docs[0]; // جاب الأوردر الحالي
            const existingRef = doc(this.firestore, `orders`, orderRef.id);
            return from(updateDoc(existingRef, newOrder)).pipe(
              switchMap(() => {
                this.router.navigate(['/checkout/address'], {
                  queryParams: { id: orderRef.id },
                  queryParamsHandling: 'merge',
                });
                return of(null);
              }),
              catchError((error) => {
                this.notification.showError('❌ فشل في تحديث الطلب');
                return of(null);
              })
            );
          } else {
            return from(addDoc(this.collectionRef, newOrder)).pipe(
              switchMap((docRef) => {
                console.log('تم إنشاء أوردر جديد');
                this.router.navigate(['/checkout/address'], {
                  queryParams: { id: docRef.id },
                  queryParamsHandling: 'merge',
                });
                return of(null);
              }),
              catchError((error) => {
                this.notification.showError('❌ فشل في تحديث الطلب');
                return of(null);
              })
            );
          }
        })
      )
      .subscribe();
  }
  getOrder(id: string): Observable<any> {
    const orderRef = doc(this.firestore, `orders/${id}`);
    return from(getDoc(orderRef)).pipe(
      map((snapshot) => {
        if (!snapshot.exists()) {
          throw new Error('Order not found');
        }
        return { id: snapshot.id, ...snapshot.data() };
      })
    );
  }

  confirmDelivery(selectedDelivery: string) {
    if (this.ordId) {
      this.orderRef = doc(this.firestore, 'orders', this.ordId);
    }

    from(
      updateDoc(this.orderRef, { selectedDelivery: selectedDelivery })
    ).subscribe({
      next: () => {
        this.notification.showSuccess('تم اضافة معلومات الدفع بنجاح');
      },
      error: () => {
        this.notification.showError('فشل في اضافة الطلب ');
      },
    });
  }

  confirmPayment(payment: string) {
    if (this.ordId) {
      this.orderRef = doc(this.firestore, 'orders', this.ordId);
    }

    from(updateDoc(this.orderRef, { selectedPayment: payment })).subscribe({
      next: () => {
        this.notification.showSuccess('تم اضافة معلومات الدفع بنجاح');
      },
      error: () => {
        this.notification.showError('فشل في اضافة الطلب ');
      },
    });
  }

  confirmorder() {
    if (this.ordId) {
      this.orderRef = doc(this.firestore, 'orders', this.ordId);
    }

    from(updateDoc(this.orderRef, { state: 'complete' })).subscribe({
      next: () => {
        this.notification.showSuccess('تم اضافة الطلب بنجاح');
        this.router.navigateByUrl('/user/order');
      },
      error: () => {
        this.notification.showError('فشل في اضافة الطلب ');
      },
    });
  }
  getAllOrders(): Observable<any[]> {
    // استخدم الـ store.select عشان تستنى الـ uid
    return this.store.select(selectUid).pipe(
      filter((uid) => !!uid), // استنى لحد ما الـ uid يبقى موجود (مش null أو undefined)
      switchMap((uid) => {
        const orderRef = collection(this.firestore, 'orders');
        const q = query(orderRef, where('userid', '==', uid));
        return collectionData(q);
      })
    );
  }
}
