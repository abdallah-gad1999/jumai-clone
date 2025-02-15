import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartSideComponent } from "./cart-side/cart-side.component";
import { CartItemsComponent } from "./cart-items/cart-items.component";
import { ProductsService } from "../../../shared/services/products/products.service";
import { CartService } from "./services/cart/cart.service";
import { WhishListService } from "../../../user/components/whish-list/services/whish-list.service";
import { Store } from "@ngrx/store";
import { getPrdFromCart } from "../../../store/cart/cart-action";
import { Observable, of } from "rxjs";
import { SliderComponent } from "../../../shared/components/slider/slider.component";
import { RouterLink } from "@angular/router";
import { Iproduct } from "../../../shared/model/products/iproduct";
import { Title } from "@angular/platform-browser";

@Component({
    selector: "app-cart",
    standalone: true,
    imports: [
        CommonModule,
        CartSideComponent,
        CartItemsComponent,
        SliderComponent,
        RouterLink,
    ],
    templateUrl: "./cart.component.html",
    styleUrl: "./cart.component.css",
})
export class CartComponent implements OnInit {
    products$!: Observable<any>;
    BestSeller!: Observable<Iproduct[]>;

    constructor(
        private ProductsService: ProductsService,
        private CartService: CartService,
        private store: Store,
        private wishList: WhishListService,
        private titel: Title
    ) {
        this.titel.setTitle("سلة التسوق");
    }
    ngOnInit(): void {
        this.products$ = this.CartService.getProductDetails();
        this.ProductsService.getProductsByQuery([
            { field: "BestSeller", operator: "==", value: true },
        ]).subscribe((products) => {
            this.BestSeller = of(products);

        });
    }

    getitem() {
        this.store.dispatch(getPrdFromCart());
    }
}
