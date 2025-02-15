import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../../auth/services/auth.service';
import { concatMap, of, map, catchError, tap } from 'rxjs';
import { attemptLogin, logInFailure, loginSuccess } from './logIn.action';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NotificationServiceService } from './../../../shared/services/NotificationService/notification-service.service';

@Injectable()
export class LogEffect {
  private action$ = inject(Actions);
  private authService = inject(AuthService);
  private router = inject(Router);
  private store = inject(Store);
  private notification = inject(NotificationServiceService);

  LogInEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(attemptLogin),
      concatMap(({ userData }) =>
        this.authService.logIn(userData).pipe(
          tap(() => {
            this.notification.showSuccess('تم تسجيل الدخول بنجاح');
            this.router.navigateByUrl('/public/home');
          }),
          map((response) => loginSuccess()), 
          catchError((error) => {
            this.notification.showError(
              'فشل تسجيل دخول المستخدم، تأكد من البريد الإلكتروني والرقم السري'
            );
            return of(logInFailure({ error }));
          })
        )
      )
    )
  );
}
