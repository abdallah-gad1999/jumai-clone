import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root',
})
export class NotificationServiceService {
  constructor(private snackBar: MatSnackBar) {}

  showSuccess(message: string) {
    this.snackBar.open(message, 'حسنا', {
      duration: 3000,
      panelClass: ['success-snackbar'],
    });
  }

  showError(message: string) {
    this.snackBar.open(message, 'حسناً', {
      duration: 3000,
      panelClass: ['error-snackbar'], // اسم الكلاس اللي هيغير اللون
    });
  }
}
