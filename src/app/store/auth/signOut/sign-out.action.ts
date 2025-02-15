import { createAction, props } from '@ngrx/store';

export const signOutAction = createAction('[sign] Out');

export const signOutSuccessAction = createAction(
  '[sign] Out',
  props<{ error: string | null }>()
);

export const signOutFailure = createAction(
  '[sign] Out',
  props<{ error: string | null }>()
);
