import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { PrdFilterComponent } from './prd-filter/prd-filter.component';
import { ProductsService } from '../../../shared/services/products/products.service';
import { Icategory } from '../../../shared/model/category/icategory';
import { Observable } from 'rxjs';
import { Iproduct } from '../../../shared/model/products/iproduct';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../../../shared/services/loading/loading.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    RouterOutlet,
    ProductListComponent,
    PrdFilterComponent,
    CommonModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products$!: Iproduct[];
  cat!: string | null;
  subCat!: string | null;

  catItems!: Icategory[];

  filters: { field: string; operator: string; value: any }[] = [];
  constructor(
    private route: ActivatedRoute,
    private productsServisec: ProductsService,
    private LoadingService: LoadingService,
    private router: Router
  ) {
    this.LoadingService.show();
    this.route.queryParamMap.subscribe({
      next: (params) => {
        this.productsServisec.getCategory(params.get('cat')).subscribe({
          next: (state) => {
            this.catItems = state;
            this.LoadingService.hide();
          },
        });
        this.filters = [];
        this.filters.push({
          field: 'category',
          operator: '==',
          value: params.get('cat'),
        });

        this.productsServisec
          .getProductsByQuery(this.filters)
          .subscribe((state) => (this.products$ = state));

        params.get('subCat');
      },
    });
  }
 
}
