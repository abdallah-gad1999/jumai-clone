import { createReducer, on } from '@ngrx/store';
import {
  ClearUserData,
  regsterUserFailure,
  regsterUserSuccess,
} from './regster.actions';

export interface UserState {
  isLoading: boolean;
  error: string | null;
}
export const initialState: UserState = {
  isLoading: false,
  error: null,
};

export const regsterReducer = createReducer(
  initialState,
  on(regsterUserSuccess, (state) => ({
    ...state,
    isLoading: false,
    error: null,
  })),
  on(regsterUserFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);
