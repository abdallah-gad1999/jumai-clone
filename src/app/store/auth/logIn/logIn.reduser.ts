import { createReducer, on } from '@ngrx/store';
import { attemptLogin, logInFailure, loginSuccess } from './logIn.action';
import { initailState } from '../../product/products.reducer';
import { Iuser } from '../../../auth/model/iuser';

export interface LogState {
  error: string | null;
  userData: Iuser;
}

export const initialState: LogState = {
  error: null,
  userData: {
    email: '',
    password: '',
  },
};

export const logReducer = createReducer(
  initailState,
  on(attemptLogin, (state) => ({
    ...state,
  })),
  on(loginSuccess, (state) => ({
    ...state,
    error: null,
  })),
  on(logInFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
