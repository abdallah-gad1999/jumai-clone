import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Auth, UserCredential } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { regsterUser } from '../../../store/auth/regster/regster.actions';
import { Iuser } from '../../model/iuser';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [RouterLink,FormsModule, CommonModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css',
})
export class CreateAccountComponent {
  user: Iuser ={
    email:'',
    password:'',
    firstName:''
  };
  constructor(private AuthService: AuthService, private store: Store) {}

  createAccount() {
    this.store.dispatch(regsterUser({ userData: this.user }));
  }
}
