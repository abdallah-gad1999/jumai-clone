import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../shared/model/products/iproduct';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from './services/catalog/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent implements OnInit {
  products$!: Iproduct[];
  param!: string | null;
  constructor(
    private route: ActivatedRoute,
    private CatalogService: CatalogService
  ) {
    this.route.queryParamMap.subscribe(
      (param) => (this.param = param.get('q'))
    );
  }
  ngOnInit(): void {
    this.CatalogService.searchByName(this.param).subscribe({
      next: (state) => {
        console.log(state);
      },
    });
  }
}
