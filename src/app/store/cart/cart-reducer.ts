import { createReducer, on } from '@ngrx/store';
import { Iproduct } from '../../shared/model/products/iproduct';
import {
  AddProduct,
  AddToCartFailure,
  AddToCartSuccess,
  clearCart,
  decreaseItem,
  decreaseItemFailure,
  decreaseItemSuccess,
  getPrdFromCart,
  getPrdFromCartSuccess,
  removeItem,
  removeItemFailure,
  removeItemSuccess,
} from './cart-action';


export interface CartState {
  isLoading: boolean;
  error: string | null;
  cart: Iproduct[];
}

export const initialState: CartState = {
  isLoading: false,
  error: null,
  cart: [],
};

export const CartReducer = createReducer(
  initialState,
  // Handle Add Product, Decrease Item, Remove Item - Set isLoading
  on(AddProduct, decreaseItem, removeItem, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  // Handle Success Actions
  on(AddToCartSuccess, (state) => ({
    ...state,
    isLoading: false,
    error: null,
  })),
  on(getPrdFromCart, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(getPrdFromCartSuccess, (state, { cart }) => ({
    ...state,
    isLoading: false,
    cart: [...cart],
    error: null,
  })),

  // Handle Remove Item Success
  on(removeItemSuccess, (state, { prdId }) => ({
    ...state,
    cart: state.cart.filter((item) => item.id !== prdId),
    isLoading: false,
    error: null,
  })),

  // Handle Failure Actions
  on(
    AddToCartFailure,
    decreaseItemFailure,
    removeItemFailure,
    (state, { error }) => ({
      ...state,
      isLoading: false,
      error,
    })
  ),

  // Handle Clear Cart
  on(clearCart, () => initialState)
);
