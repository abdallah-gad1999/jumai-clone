import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './userState.reducer';

export const userStateSelector = createFeatureSelector<UserState>('authState');

export const selectToken = createSelector(
  userStateSelector,
  (state) => state.token ?? null
);

export const selectUid = createSelector(
  userStateSelector,
  (state) => state.uid
);

export const selectUserState = createSelector(
  userStateSelector,
  (state)=> state.user
)
