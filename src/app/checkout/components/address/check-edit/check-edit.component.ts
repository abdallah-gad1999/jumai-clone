import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iaddress } from '../model/iaddress';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectOrderItem } from '../../../../store/order/Order-selector';
import { DocumentReference } from 'firebase/firestore';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';
import { from, Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Router, RouterLink } from '@angular/router';
import { selectUid } from '../../../../store/auth/userState/userState.selector';
import { NotificationServiceService } from '../../../../shared/services/NotificationService/notification-service.service';

@Component({
  selector: 'app-check-edit',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './check-edit.component.html',
  styleUrl: './check-edit.component.css',
})
export class CheckEditComponent implements OnInit, OnDestroy {
  private store = inject(Store);
  userId!: string | null;
  newAdress!: Iaddress;
  ordid!: string | null;
  orderRef!: DocumentReference | null;
  private subscriptions: Subscription[] = [];

  constructor(
    private fireStore: Firestore,
    private router: Router,
    private notificationService: NotificationServiceService,

  ) {}

  ngOnInit(): void {
    const uidSub = this.store
      .select(selectUid)
      .pipe(take(1))
      .subscribe((id) => {
        this.userId = id;
        this.initializeNewAddress();
      });

    const orderSub = this.store
      .select(selectOrderItem)
      .pipe(take(1))
      .subscribe((order) => {
        if (order) {
          this.ordid = order.id;
        }
      });

    this.subscriptions.push(uidSub, orderSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  initializeNewAddress() {
    this.newAdress = {
      userId: this.userId || '',
      firstName: '',
      lastName: '',
      phoneNumber: undefined,
      Number: undefined,
      address: '',
      addressDetails: '',
      cety: '',
      town: '',
    };
  }

  addNewAdress(): void {
    if (!this.ordid) {
      this.notificationService.showError('لم يتم العثور على الطلب.');
      return;
    }

    this.orderRef = doc(this.fireStore, 'orders', this.ordid);

    from(
      updateDoc(this.orderRef, { address: this.newAdress, step: 'delivery' })
    ).subscribe({
      next: () => {
        this.notificationService.showSuccess('تمت إضافة العنوان بنجاح');
        //  this.router.navigateByUrl('/checkout/address').then(() => {
        //   window.location.reload();
        // });

      },
      error: (error) => {
        console.error(error);
        this.notificationService.showError('حدث خطأ أثناء إضافة العنوان');
      },
    });
  }
}
