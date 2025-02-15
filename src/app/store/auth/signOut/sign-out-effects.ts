import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../../auth/services/auth.service';
import {
  signOutAction,
  signOutFailure,
  signOutSuccessAction,
} from './sign-out.action';
import { catchError, concatMap, map, of } from 'rxjs';

@Injectable()
export class SignOutEffect {
  private actions$ = inject(Actions);
  private auth = inject(AuthService);

  signEffct = createEffect(() =>
    this.actions$.pipe(
      ofType(signOutAction),
      concatMap(() =>
        this.auth.logout().pipe(
          map(() => signOutSuccessAction({ error: null })),
          catchError((error) =>
            of(signOutFailure({ error: error.message || 'Logout failed' }))
          )
        )
      )
    )
  );
}
