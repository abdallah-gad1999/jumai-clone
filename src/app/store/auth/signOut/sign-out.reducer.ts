import { createReducer, on } from '@ngrx/store';
import {
  signOutAction,
  signOutFailure,
  signOutSuccessAction,
} from './sign-out.action';

export interface SignOutState {
  error: string | null;
}
export const initialState: SignOutState = {
  error: null,
};

export const signOutSuccess = createReducer(
  initialState,

  on(signOutAction, () => initialState),

  on(signOutSuccessAction, (state, { error }) => ({
    ...state,
    error,
  })),

  on(signOutFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
