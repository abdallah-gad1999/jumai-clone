import { createAction, props } from '@ngrx/store';
import { Iuser } from '../../../auth/model/iuser';

export const regsterUser = createAction(
  '[regster] regster user',
  props<{ userData: Iuser }>()
);

export const regsterUserSuccess = createAction(
  '[user] regsterUserSuccess',
);

export const regsterUserFailure = createAction(
  '[user] regsterUserFailure',
  props<{ error: string }>()
);

export const ClearUserData = createAction('[user] clear data');
