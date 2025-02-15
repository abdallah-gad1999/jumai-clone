import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { loadProductsReducer } from './store/product/products.reducer';
import { ProductsEffect } from './store/product/products.effects';
import { regsterReducer } from './store/auth/regster/regster.reducer';
import { UserAuthEffect } from './store/auth/regster/regster.effects';
import { logReducer } from './store/auth/logIn/logIn.reduser';
import { LogEffect } from './store/auth/logIn/logIn.effects';
import { userReducer } from './store/auth/userState/userState.reducer';
import { SignOutEffect } from './store/auth/signOut/sign-out-effects';
import { CartReducer } from './store/cart/cart-reducer';
import { CartEffects } from './store/cart/cart-add-effects';
import { orderReducer } from './store/order/Order-reducer';
import { OrderEffect } from './store/order/Order-effects';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      products: loadProductsReducer,
      userState: regsterReducer,
      authState: userReducer,
      logIn: logReducer,
      cartState: CartReducer,
      order: orderReducer,
    }),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true, // If set to true, the connection is established within the Angular zone
    }),
    provideEffects([
      ProductsEffect,
      UserAuthEffect,
      LogEffect,
      SignOutEffect,
      CartEffects,
      OrderEffect,
    ]),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideHttpClient(withFetch()), provideAnimationsAsync(),
  ],
};
