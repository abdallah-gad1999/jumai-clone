import { createAction, props } from '@ngrx/store';
import { Iorder } from '../../checkout/model/iorder';

export const loadorder = createAction(
  '[order] load Order',
  props<{ id: string }>()
);

export const loadorderSuccess = createAction(
  '[order] load Order Success ',
  props<{ order: Iorder }>()
);

export const loadorderFailure = createAction(
  '[order] load Order Failure ',
  props<{ error: string }>()
);

export const loadAllOrder = createAction('[order] load Order  ');

export const loadAllOrderSucess = createAction(
  '[order] load Order Sucess  ',
  props<{ orders: Iorder[] }>()
);
