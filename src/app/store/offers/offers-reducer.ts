import { createReducer, on } from '@ngrx/store';
import { loadOffers, loadOffersFailure, loadOffersSuccess } from './offers-action';
import { Iproduct } from '../../shared/model/products/iproduct';

export interface OffersState {
  isLoading: boolean;
  error: string | null;
  offers: { [key: string]: Iproduct[] };  // تخزين العروض حسب النوع
}

export const initialState: OffersState = {
  isLoading: false,
  error: null,
  offers: {}  // تخزين العروض حسب النوع
};

export const offersReducer = createReducer(
  initialState,
  on(loadOffers, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(loadOffersSuccess, (state, { offers }) => ({
    ...state,
    isLoading: false,
    error: null,
    offers  // هنا بقى هنحط العروض بعد ما يتم تحميلهم
  })),
  on(loadOffersFailure, (state, { error }) => ({
    ...state,
    error
  }))
);
