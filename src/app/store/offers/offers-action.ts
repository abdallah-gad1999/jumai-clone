import { createAction, props } from '@ngrx/store';
import { Iproduct } from '../../shared/model/products/iproduct';

export const loadOffers = createAction(
  '[offer] load offers',
  props<{ offerTypes: string[] }>()  // تغيير الكود هنا علشان يبقى أعم
);

export const loadOffersSuccess = createAction(
  '[offer] load success',
  props<{ offers: { [key: string]: Iproduct[] } }>()  // هنا يمكننا تخزين العروض حسب النوع
);

export const loadOffersFailure = createAction(
  '[offer] load failure',
  props<{ error: string }>()
);
