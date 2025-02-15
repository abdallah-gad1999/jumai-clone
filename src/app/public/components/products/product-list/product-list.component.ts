import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectProductsByCategory } from '../../../../store/product/products.Selector';
import { Observable } from 'rxjs';
import { Iproduct } from '../../../../shared/model/products/iproduct';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../../../shared/services/products/products.service';
import { loadProducts } from '../../../../store/product/products.action';
import { Icategory } from '../../../../shared/model/category/icategory';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  @Input() category: Icategory[] = [];
  @Input() products!: Iproduct[];
  catTitle!:string
  activeCategory: string | null = null; // الفئة النشطة
  appliedFilters: { [key: string]: string[] } = {}; // الفلاتر المطبقة
  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private productSevrices: ProductsService,
    private title:Title,
    private router:Router
  ) {
    this.category.forEach((prd)=>this.catTitle = prd.name)
    this.title.setTitle(`تسوق اجدد المنتجات من مختلف البراندات`)
  }

  calculateDiscountedPrice(price: number, discount: number) {
    return price - (price * discount) / 100;
  }

   navigate(prdId: string) {
    this.router.navigateByUrl(`/public/details/${prdId}`);
  }
}
