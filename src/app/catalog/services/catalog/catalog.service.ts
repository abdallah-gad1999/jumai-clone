import { Injectable } from '@angular/core';
import {
  CollectionReference,
  Firestore,
  collection,
  collectionData,
  query,
  where,
} from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Iproduct } from '../../../shared/model/products/iproduct';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  collectionRef!: CollectionReference;
  constructor(private firestore: Firestore) {
    this.collectionRef = collection(this.firestore, 'products');
  }

  searchByName(params: string | null): Observable<Iproduct[]> {
    const q = query(this.collectionRef, where('name', '==', params));

    return collectionData(q, { idField: 'id' }) as Observable<Iproduct[]>;
  }
}
