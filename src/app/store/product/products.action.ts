import { createAction, props } from '@ngrx/store';
import { Iproduct } from '../../shared/model/products/iproduct';

interface Filter {
  field: string;
  operator: string;
  value: any;
}
// تعريف الأفعال
export const loadProducts = createAction(
  '[Products] Load Products',
  props<{ filter: Filter[] }>()
);
export const loadProductSuccess = createAction(
  '[Products] Load Product Success',
  props<{ products: Iproduct[] }>()
);
export const loadProductsFailure = createAction(
  '[Products] Load Products Failure',
  props<{ error: string }>()
);
