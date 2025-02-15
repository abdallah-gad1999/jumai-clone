import { createReducer, on } from '@ngrx/store';
import { saveUserTokin } from './userState.action';
import { Iuser } from '../../../auth/model/iuser';

export interface UserState {
  token: boolean;
  uid: string | null;
  user:Partial<Iuser> | null
}

export const initailState: UserState = {
  token: false,
  uid: null,
  user:null
};

export const userReducer = createReducer(
  initailState,
  on(saveUserTokin, (state, { token, uid,user}) => ({
    ...state,
    token,
    uid,
    user
  }))
);
