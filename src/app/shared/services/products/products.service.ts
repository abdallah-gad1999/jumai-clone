import { Injectable, OnInit } from '@angular/core';
import {
  Firestore,
  CollectionReference,
  collectionData,
  collection,
  query,
  docData,
} from '@angular/fire/firestore';
import { Observable, from, map } from 'rxjs';
import { Iproduct } from '../../model/products/iproduct';
import {
  DocumentReference,
  QueryConstraint,
  doc,
  getDoc,
  where,
} from 'firebase/firestore';
import { FirebaseApp } from '@angular/fire/app';
import { Icategory } from '../../model/category/icategory';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productCollection: CollectionReference;
  catColliction!: CollectionReference;
  catRef!: CollectionReference;
  constructor(private firestore: Firestore) {
    this.productCollection = collection(this.firestore, 'products');
    this.catColliction = collection(this.firestore, 'category');
  }

  getAllPro(): Observable<Iproduct[]> {
    return collectionData(this.productCollection) as Observable<Iproduct[]>;
  }

  getProductById(prdId: string | null): Observable<Iproduct> {
    const docRef = doc(this.firestore, `products/${prdId}`);
    return docData(docRef).pipe(
      map((doc) => {
        if (doc) {
          return { id: prdId, ...doc } as Iproduct;
        } else {
          throw new Error('Product not found');
        }
      })
    );
  }

  getCategory(cat: string | null): Observable<Icategory[]> {
    this.catRef = collection(this.firestore, 'category');

    const q = query(this.catRef, where('name', '==', cat));
    return collectionData(q) as Observable<Icategory[]>;
  }

  getProductsByQuery(
    filters: { field: string; operator?: any; value?: any }[]
  ) {
    const condation = filters.map((filter) =>
      where(filter.field, filter.operator, filter.value)
    );
    const q = query(this.productCollection, ...condation);
    return collectionData(q, { idField: 'id' }) as Observable<Iproduct[]>;
  }
}
