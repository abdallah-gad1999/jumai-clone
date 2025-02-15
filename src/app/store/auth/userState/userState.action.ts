import { createAction, props } from '@ngrx/store';
import { Iuser } from '../../../auth/model/iuser';

export const saveUserTokin = createAction(
  '[user]  user tokin',
  props<{ token: boolean; uid: string | null; user: Partial<Iuser> }>()
);
