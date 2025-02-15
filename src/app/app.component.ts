import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { onAuthStateChanged } from 'firebase/auth';
import { Store } from '@ngrx/store';
import { saveUserTokin } from './store/auth/userState/userState.action';
import { filter, from } from 'rxjs';
import { selectFlashSell } from './store/product/products.Selector';
import { ProductsService } from './shared/services/products/products.service';
import { getPrdFromCart } from './store/cart/cart-action';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { Iuser } from './auth/model/iuser';
import { loadAllOrder } from './store/order/Order-action';
import { LoadingComponent } from './shared/components/loading/loading/loading.component';
import { ScrollTopComponent } from './shared/components/scroll-top/scroll-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadingComponent, ScrollTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'jumia-ecommerce';
  private auth = getAuth();
  user!: Partial<Iuser>;
  isLoading!: boolean;

  constructor(
    private store: Store,
    private ProductsService: ProductsService,
    private firestore: Firestore,
    private router: Router
  ) {
    this.router.events.subscribe((events) => {
      if (events instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit(): void {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        const userId = user.uid;

        const userRef = doc(this.firestore, `users/${userId}`);

        from(getDoc(userRef)).subscribe({
          next: (state) => {
            console.log(state);
            console.log(state.data());
            if (state.exists()) {
              this.user = state.data() as Partial<Iuser>;
              from(user.getIdToken()).subscribe({
                next: (token) => {
                  this.store.dispatch(
                    saveUserTokin({
                      token: !!token,
                      uid: userId,
                      user: this.user,
                    })
                  );
                },
              });
            }
          },
        });
      }
    });

    this.ProductsService.getProductsByQuery([
      { field: 'brand', operator: '==', value: 'beko' },
    ]).subscribe({
      next: (state) => {},
    });
  }
}
