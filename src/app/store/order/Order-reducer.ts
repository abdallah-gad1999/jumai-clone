import { createReducer, on } from '@ngrx/store';
import { Iorder } from '../../checkout/model/iorder';
import {
  loadAllOrder,
  loadAllOrderSucess,
  loadorder,
  loadorderFailure,
  loadorderSuccess,
} from './Order-action';

export interface OrderState {
  isLoading: boolean;
  order: Iorder | null;
  error: string | null;
  orders: Iorder[]; // ✅ مصفوفة فارغة بدلًا من null
}

export const initialState: OrderState = {
  isLoading: false,
  order: null,
  error: null,
  orders: [], // ✅ تحسين: تعيين مصفوفة فارغة بدلًا من null
};

export const orderReducer = createReducer(
  initialState,

  // تحميل طلب معين
  on(loadorder, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),

  // تحميل جميع الطلبات
  on(loadAllOrder, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),

  // نجاح تحميل جميع الطلبات
  on(loadAllOrderSucess, (state, { orders }) => ({
    ...state,
    orders, // ✅ يتم تحديث الطلبات هنا
    isLoading: false,
    error: null, // ✅ مسح أي أخطاء سابقة
  })),

  // نجاح تحميل طلب واحد
  on(loadorderSuccess, (state, { order }) => ({
    ...state,
    order,
    isLoading: false,
    error: null,
  })),

  // فشل التحميل
  on(loadorderFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);
