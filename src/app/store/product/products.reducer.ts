import { createReducer, on } from '@ngrx/store';
import { Iproduct } from '../../shared/model/products/iproduct';
import {
  loadProductSuccess,
  loadProducts,
  loadProductsFailure,
} from './products.action';

export interface ProductsState {
  products: Iproduct[];
  isLoading: boolean;
  error: string | null;
}

export const initailState: ProductsState = {
  products: [],
  isLoading: false,
  error: null,
};

export const loadProductsReducer = createReducer(
  initailState,
  on(loadProducts, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(loadProductSuccess, (state, { products }) => ({
    ...state,
    isLoading: false,
    products,
    error: null,
  })),
  on(loadProductsFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);
