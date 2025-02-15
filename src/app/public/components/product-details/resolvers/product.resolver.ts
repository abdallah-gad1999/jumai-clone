import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { ProductsService } from '../../../../shared/services/products/products.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Iproduct } from '../../../../shared/model/products/iproduct';

export const productResolver: ResolveFn<Observable<Iproduct>> = (
  route,
  state
) => {
  const productService = inject(ProductsService); // حقن خدمة المنتج
  const store = inject(Store);
  const id = route.paramMap.get('id')!;
  console.log('Resolver executed, product ID:', id);

  return productService.getProductById(id) as Observable<Iproduct>
};
