import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsService } from '../../../shared/services/products/products.service';
import { Iproduct } from '../../../shared/model/products/iproduct';
import { Observable } from 'rxjs';
import {
  selectAllProducts,
  selectError,
  selectIsLoading,
} from '../../../store/product/products.Selector';
import { loadProducts } from '../../../store/product/products.action';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { attemptLogin } from '../../../store/auth/logIn/logIn.action';
import { FormsModule } from '@angular/forms';
import { Iuser } from '../../model/iuser';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css',
})
export class LogInComponent implements OnInit {
  userData: Iuser = {
    email:'',
    password:''
  };
  constructor(
    private productService: ProductsService,
    private store: Store,
    private auth: AuthService
  ) {}
  ngOnInit(): void {}

  logIn() {
    this.store.dispatch(attemptLogin({ userData: this.userData }));
  }
}
