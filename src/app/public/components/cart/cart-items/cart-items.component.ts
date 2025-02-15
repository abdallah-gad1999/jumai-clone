import { Component } from "@angular/core";
import { CartService } from "../services/cart/cart.service";
import { Observable } from "rxjs";
import { CommonModule } from "@angular/common";
import { Iproduct } from "../../../../shared/model/products/iproduct";
import { Store } from "@ngrx/store";
import {
    AddProduct,
    decreaseItem,
    removeItem,
} from "../../../../store/cart/cart-action";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-cart-items",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./cart-items.component.html",
    styleUrl: "./cart-items.component.css",
})
export class CartItemsComponent {
    products$!: Observable<Iproduct[]>;
    items!: Observable<Iproduct[]>;

    constructor(private CartService: CartService, private store: Store) {}
    ngOnInit(): void {
        this.products$ = this.CartService.getProductDetails();
        this.products$.subscribe({
            next: (state) => {
                console.log(state,'from cart');
                const prd = this.CartService.calcTotalPrice(state);
                console.log(prd);
            },
        });
    }

    calcDiscount(price: any, discount: any) {
        return price - (price * discount) / 100;
    }

    addtoCart(id: any, qty: any) {
        this.store.dispatch(AddProduct({ prdId: id, qty: qty }));
    }

    decreaseItem(id: any) {
        this.store.dispatch(decreaseItem({ prdId: id }));
    }

    removeItem(id: any) {
        this.store.dispatch(removeItem({ prdId: id }))
    }



    
}
