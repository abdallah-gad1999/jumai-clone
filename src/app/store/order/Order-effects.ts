import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadAllOrder,
  loadAllOrderSucess,
  loadorder,
  loadorderFailure,
  loadorderSuccess,
} from './Order-action';
import { catchError, concatMap, map, of } from 'rxjs';
import { CheckOutService } from '../../checkout/services/check-out.service';

@Injectable()
export class OrderEffect {
  private actions$ = inject(Actions);
  private checkServes = inject(CheckOutService);

  OrdersEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadorder),
      concatMap(({ id }) =>
        this.checkServes.getOrder(id).pipe(
          map((order) => loadorderSuccess({ order })),
          catchError((error) => of(loadorderFailure({ error })))
        )
      )
    );
  });

  getAllOrderEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadAllOrder),
      concatMap(() =>
        this.checkServes.getAllOrders().pipe(
          concatMap((orders) => of(loadAllOrderSucess({ orders }))), // ✅ تخزين البيانات بنجاح
          catchError((error) => of(loadorderFailure({ error }))) // ✅ معالجة الخطأ
        )
      )
    );
  });
}

