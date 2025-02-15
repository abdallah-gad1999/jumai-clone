import { Component } from '@angular/core';
import { Iuser } from '../../../auth/model/iuser';
import { Store } from '@ngrx/store';
import { selectUserState } from '../../../store/auth/userState/userState.selector';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  address!:Observable<any>
  user$!: Observable<Partial<Iuser | null>>;
  constructor(private store: Store,private title:Title) {
    this.user$ = this.store.select(selectUserState);
    this.title.setTitle('الحساب')
  }
}
