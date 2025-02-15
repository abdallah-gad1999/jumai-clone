import { inject } from '@angular/core';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { ResolveFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { EMPTY, Observable, from, map } from 'rxjs';
import { loadorder } from '../../store/order/Order-action';

export const checkOutResolver: ResolveFn<any> = (route, state) => {
  const firestore = inject(Firestore);
  const store = inject(Store);
  const id = route.queryParamMap.get('id');
  const orderRef = doc(firestore, `orders/${id}`);
  console.log('الريسلوفر اتعمل ي  نجم', id);

  if (id) {
    return store.dispatch(loadorder({ id }));
  }
  return EMPTY;
};
