import { Injectable, OnInit } from "@angular/core";
import {
    EMPTY,
    Observable,
    concatMap,
    forkJoin,
    from,
    map,
    throwError,
} from "rxjs";
import { Store } from "@ngrx/store";
import { addDoc, collection, documentId, setDoc } from "firebase/firestore";
import {
    Firestore,
    collectionData,
    deleteDoc,
    deleteField,
    doc,
    docData,
    getDoc,
    getDocs,
    onSnapshot,
    query,
    where,
} from "@angular/fire/firestore";
import { Icart } from "../../model/icart";
import { Iproduct } from "../../../../../shared/model/products/iproduct";
import { NotificationServiceService } from "../../../../../shared/services/NotificationService/notification-service.service";
import { selectUid } from "../../../../../store/auth/userState/userState.selector";
import { Router } from "@angular/router";

@Injectable({
    providedIn: "root",
})
export class CartService implements OnInit {
    uid!: string | null;
    id!: string | null;

    constructor(
        private store: Store,
        private Firestore: Firestore,
        private NotificationService: NotificationServiceService,
        private router:Router   
    ) {
        this.store.select(selectUid).subscribe({
            next: (id) => {
                this.uid = id;
            },
        });
    }
    ngOnInit(): void {
        this.getProductDetails().subscribe({
            next: (state) => {
                console.log("from serves", state);
            },
        });
    }

    addToCart(prdId: string, qty: number) {
        if (this.uid) {
            console.log("Start addToCart:", prdId, qty);
            const documentRef = doc(this.Firestore, `cart/${this.uid}`);
            console.log("Document Reference:", documentRef);

            const newPrd = { [prdId]: { qty } };

            return from(getDoc(documentRef)).pipe(
                concatMap((docSnap) => {
                    console.log("Document Snapshot:", docSnap.data());
                    if (docSnap.exists()) {
                        const product = docSnap.data();
                        if (product && product[prdId]) {
                            const newQty = product[prdId].qty + qty;
                            console.log("Updated Quantity:", newQty);
                            return from(
                                setDoc(
                                    documentRef,
                                    { [prdId]: { qty: newQty } },
                                    { merge: true }
                                )
                            );
                        } else {
                            return from(
                                setDoc(documentRef, newPrd, { merge: true })
                            );
                        }
                    } else {
                        return from(setDoc(documentRef, newPrd));
                    }
                })
            );
        } else {
            this.router.navigateByUrl('/auth')
            return EMPTY;
        }
    }

    decreaseQty(prdId: string) {
        const documentRef = doc(this.Firestore, `cart/${this.uid}`);

        return from(getDoc(documentRef)).pipe(
            concatMap((docSnap) => {
                if (docSnap.exists()) {
                    const product = docSnap.data();
                    if (product && product[prdId]) {
                        const newQty = product[prdId].qty - 1;
                        if (newQty <= 0) {
                            return from(
                                setDoc(
                                    documentRef,
                                    { [prdId]: deleteField() },
                                    { merge: true }
                                )
                            );
                        } else {
                            return from(
                                setDoc(
                                    documentRef,
                                    { [prdId]: { qty: newQty } },
                                    { merge: true }
                                )
                            );
                        }
                    }
                }
                throw EMPTY;
            })
        );
    }

    removeItem(prdId: string) {
        const documentRef = doc(this.Firestore, `cart/${this.uid}`);

        return from(getDoc(documentRef)).pipe(
            concatMap((docSnap) => {
                if (docSnap.exists()) {
                    const product = docSnap.data();
                    if (product && product[prdId]) {
                        return from(
                            setDoc(
                                documentRef,
                                { [prdId]: deleteField() },
                                { merge: true }
                            )
                        ).pipe(
                            map(() => {
                                this.NotificationService.showError(
                                    "تم ازالة المنتج بنجاح "
                                );
                            })
                        );
                    } else {
                        throw EMPTY;
                    }
                }
                throw EMPTY;
            })
        );
    }

    getProductDetails(): Observable<any> {
        const documentRef = doc(this.Firestore, `cart/${this.uid}`);
        const collectionRef = collection(this.Firestore, `products`);

        return new Observable((observer) => {
            onSnapshot(documentRef, (docSnap) => {
                if (docSnap.exists()) {
                    const cartData = docSnap.data();
                    if (cartData) {
                        const productIds = Object.keys(cartData);

                        if (productIds.length > 0) {
                            const productQuery = query(
                                collectionRef,
                                where(documentId(), "in", productIds)
                            );

                            onSnapshot(productQuery, (querySnap) => {
                                const products = querySnap.docs.map((doc) => ({
                                    id: doc.id,
                                    qty: cartData[doc.id] || 0,
                                    ...doc.data(), // إضافة البيانات بتاعة كل منتج
                                }));
                                observer.next(products);
                            });
                        } else {
                            observer.next([]);
                        }
                    }
                } else {
                    observer.next([]);
                }
            });
        });
    }

    calcTotalPrice(products: any[]): number {
        return products.reduce((sum, product, index, arr) => {
            const discount = product.discount || 0;
            const qty = product.qty.qty || 1;
            const priceAfterDiscount =
                product.price - (product.price * discount) / 100;

            return sum + priceAfterDiscount * qty;
        }, 0);
    }
}
