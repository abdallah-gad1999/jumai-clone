import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './products.reducer';
import { Iproduct } from '../../shared/model/products/iproduct';

export const selectProductState =
  createFeatureSelector<ProductsState>('products');

export const selectAllProducts = createSelector(
  selectProductState,
  (state) => state.products
);

export const selectFlashSell = createSelector(selectAllProducts, (state) =>
  state.filter((products) => products.isFlashSale)
);

export const selectProductsByCategory = (category: string) =>
  createSelector(selectAllProducts, (products) =>
    products.filter((product) => product.category === category)
  );

export const selectIsLoading = createSelector(
  selectProductState,
  (state) => state.isLoading
);

export const selectError = createSelector(
  selectProductState,
  (state) => state.error
);
