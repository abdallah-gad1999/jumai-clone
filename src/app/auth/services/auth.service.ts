import { Injectable, OnInit } from '@angular/core';
import { createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';
import {
  CollectionReference,
  Firestore,
  collection,
  doc,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import {
  UserCredential,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { Observable, from, switchMap, take, tap } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectUid } from '../../store/auth/userState/userState.selector';
import { Iuser } from '../model/iuser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = getAuth();
  id!: string | null;
  collectionRef!: CollectionReference;
  constructor(
    private store: Store,
    private firestore: Firestore,
    private router: Router
  ) {
    this.store.select(selectUid).subscribe({
      next: (id) => {
        this.id = id;
      },
    });
  }

  regster(userData: Iuser) {
    return from(
      createUserWithEmailAndPassword(
        this.auth,
        userData.email,
        userData.password
      )
    );
  }

  logIn(userData: Iuser): Observable<UserCredential> {
    return from(
      signInWithEmailAndPassword(this.auth, userData.email, userData.password)
    );
  }

  logout(): Observable<any> {
    return from(signOut(this.auth));
  }

  saveUserDetails(userDetails: Partial<Iuser>): Observable<void> {
    return this.store.select(selectUid).pipe(
      take(1),
      switchMap((uid) => {
        if (!uid) throw new Error('User UID not found');

        const userRef = doc(this.firestore, `users/${uid}`);
        return from(updateDoc(userRef, userDetails)); 
      })
    );
  }

}
