import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrderState } from './Order-reducer';

export const selectedOrderState = createFeatureSelector<OrderState>('order');

export const selectOrderLoading = createSelector(
  selectedOrderState,
  (state) => state.isLoading
);

export const selectOrderError = createSelector(
  selectedOrderState,
  (state) => state.error
);

export const selectOrderItem = createSelector(
  selectedOrderState,
  (state) => state.order
);


export const selectOrders = createSelector(
  selectedOrderState,
  (state) => state.orders
);
