import { createAction, props } from '@ngrx/store';
import { Iproduct } from '../../shared/model/products/iproduct';

//  Handle Add Item To cart

export const AddProduct = createAction(
  '[cart] Add Product',
  props<{ prdId: string; qty: number }>()
);

export const AddToCartSuccess = createAction('[cart] Add Success');

export const AddToCartFailure = createAction(
  '[cart] Add Failure',
  props<{ error: string }>()
);

//  Handle Decrease Item from cart

export const decreaseItem = createAction(
  '[cart] Decrease Item',
  props<{ prdId: string }>()
);

export const decreaseItemSuccess = createAction(
  '[cart] Decrease Item Success',
  props<{ prdId: string }>()
);

export const decreaseItemFailure = createAction(
  '[cart] Decrease Item Failure',
  props<{ error: string }>()
);

//  Handle remove Item from cart

export const removeItem = createAction(
  '[cart] Remove Item',
  props<{ prdId: string }>()
);

export const removeItemSuccess = createAction(
  '[cart] Remove Item Success',
  props<{ prdId: string }>()
);

export const removeItemFailure = createAction(
  '[cart] Remove Item Failure',
  props<{ error: string }>()
);

//  Handle cleaer all Item from cart

export const clearCart = createAction('[cart] Clear Cart');

//  Handle get all Item from cart

export const getPrdFromCart = createAction('[cart] get prd');

export const getPrdFromCartSuccess = createAction(
  '[cart] get prd Success',
  props<{ cart: any[] }>()
);

export const getPrdFromCartFaiulre = createAction(
  '[cart] get prd Faiulre',
  props<{ error: string }>()
);
