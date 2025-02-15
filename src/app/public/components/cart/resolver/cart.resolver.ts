import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { CartService } from "../services/cart/cart.service";
import { Iproduct } from "../../../../shared/model/products/iproduct";
import { Observable } from "rxjs";

export const cartResolver: ResolveFn<Observable<any>> = (route, state) => {
    const cartService = inject(CartService);
    console.log('بتاع الكارت اتعمل');

    return cartService.getProductDetails() as Observable<Iproduct[]>;
};
