import { Injectable, inject } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { ProductsService } from '../../shared/services/products/products.service'; // استيراد الخدمة
import {
  loadProductSuccess,
  loadProducts,
  loadProductsFailure,
} from './products.action';
import {catchError, concatMap, map, of } from 'rxjs';


@Injectable()
export class ProductsEffect {
  loadProducts$ = createEffect(() => {
    const action$ = inject(Actions);
    const productServeice = inject(ProductsService);

    return action$.pipe(
      ofType(loadProducts),
      concatMap((actions) =>
        productServeice
          .getProductsByQuery(actions.filter)
          .pipe(map((products) => loadProductSuccess({ products })))
      ),
      catchError((error) => of(loadProductsFailure({ error })))
    );
  });
}

