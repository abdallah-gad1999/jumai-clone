import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { CartService } from "../services/cart/cart.service";
import { Observable, map } from "rxjs";
import { Iproduct } from "../../../../shared/model/products/iproduct";
import { ActivatedRoute } from "@angular/router";
import { CommonModule } from "@angular/common";

import { CheckOutService } from "../../../../checkout/services/check-out.service";
import { getAuth } from "@angular/fire/auth";
@Component({
    selector: "app-cart-side",
    standalone: true,
    imports: [CommonModule],

    templateUrl: "./cart-side.component.html",
    styleUrl: "./cart-side.component.css",
})
export class CartSideComponent {
    products$!: Observable<Iproduct[]>;
    resolvData: any;
    totalPrice: number = 0;
    prdOrder: any;
    uid!: string | undefined;
    constructor(
        private CartService: CartService,
        private store: Store,
        private ActivatedRoute: ActivatedRoute,
        private CheckOutService: CheckOutService
    ) {}
    ngOnInit(): void {
        this.products$ = this.CartService.getProductDetails();
        this.products$.subscribe({
            next: (state) => {
                this.totalPrice = this.CartService.calcTotalPrice(state);
            },
        });
    }

    createorder() {
        const auth = getAuth();
        const user = auth.currentUser;
        this.uid = user?.uid;
        this.products$
            .pipe(
                map((products: Iproduct[]) => {
                    return {
                        totalPrice: this.totalPrice,
                        products: products.map((product) => ({
                            id: product.id,
                            img: product.images[0],
                            qty: product.qty.qty || 1,
                        })),
                    };
                })
            )
            .subscribe({
                next: (products) => {
                    this.CheckOutService.createOrder(products);
                },
            });
    }
}
