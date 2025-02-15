import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { getAuth, User } from 'firebase/auth';
import {
  Firestore,
  doc,
  setDoc,
  DocumentReference,
  collection,
  CollectionReference,
} from '@angular/fire/firestore';
import { Observable, from, tap } from 'rxjs';
import { Iuser } from '../../model/iuser';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NotificationServiceService } from './../../../shared/services/NotificationService/notification-service.service';

@Component({
  selector: 'app-create-account-details',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './create-account-details.component.html',
  styleUrls: ['./create-account-details.component.css'],
})
export class CreateAccountDetailsComponent {
  private auth = getAuth();
  private userCollection: CollectionReference;
  userData: Partial<Iuser> = {};

  constructor(
    private store: Store,
    private firestore: Firestore,
    private authService: AuthService,
    private router: Router,
    private NotificationServiceService: NotificationServiceService
  ) {
    this.userCollection = collection(this.firestore, 'users');
  }

  saveUserData() {
    this.authService.saveUserDetails(this.userData).subscribe({
      next: () => {
        tap(() =>
          this.NotificationServiceService.showSuccess('مرحبا بك في جوميا')
        ),
          this.router.navigateByUrl('/public/home');
      },

      error: (err) => console.error('Error updating user:', err), 
    });
  }
}
