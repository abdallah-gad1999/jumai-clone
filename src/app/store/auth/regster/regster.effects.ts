import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../../auth/services/auth.service';
import {
  regsterUserSuccess,
  regsterUserFailure,
  regsterUser,
} from './regster.actions';
import { catchError, concatMap, from, map, of, switchMap, tap } from 'rxjs';
import {
  Firestore,
  addDoc,
  collection,
  doc,
  setDoc,
} from '@angular/fire/firestore';
import { NotificationServiceService } from './../../../shared/services/NotificationService/notification-service.service';
import { Router } from '@angular/router';

@Injectable()
export class UserAuthEffect {
  private actions$ = inject(Actions);
  private authService = inject(AuthService);
  private firestore = inject(Firestore);
  private notification = inject(NotificationServiceService);
  private router = inject(Router);

  regsterUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(regsterUser),
      concatMap(({ userData }) =>
        this.authService.regster(userData).pipe(
          switchMap((UserCredential) => {
            const uid = UserCredential.user.uid;

            const collectionRef = doc(this.firestore, `users/${uid}`);

            const userProfile = {
              uid: uid,
              firstName: userData.firstName,
              createAt: new Date(),
              email: userData.email,
            };

            return from(setDoc(collectionRef, userProfile)).pipe(
              tap(() => {
                this.notification.showSuccess('نجاح انشاء الحساب');
                this.authService.logout().subscribe(() => {
                  setTimeout(() => {
                    this.router.navigate(['/auth/accountDetails']);
                  }, 1000);
                });
              }),
              map(() => regsterUserSuccess())
            );
          }),
          catchError((error) =>
            of(regsterUserFailure(error)).pipe(
              tap(() =>
                this.notification.showError(`فشل في انشاء الحساب ${error}`)
              )
            )
          )
        )
      )
    )
  );
}
