import { createAction, props } from '@ngrx/store';
import { Iuser } from '../../../auth/model/iuser';

export const attemptLogin = createAction(
  '[auth] attemptLogin',
  props<{ userData:Iuser }>()
);

export const loginSuccess = createAction(
  '[auth] loginSuccess ',
);

export const logInFailure = createAction(
  '[auth] logInFailure',
  props<{ error: string }>()
);
