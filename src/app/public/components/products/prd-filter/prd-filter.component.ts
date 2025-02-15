import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from '../../../../shared/services/products/products.service';
import { Observable, filter } from 'rxjs';
import { Icategory } from '../../../../shared/model/category/icategory';
import { AsyncPipe, CommonModule, KeyValuePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-prd-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prd-filter.component.html',
  styleUrls: ['./prd-filter.component.css'],
})
export class PrdFilterComponent {
  @Input() category!: Icategory[];
  subCat!: string | null;
  filters!: [];
  selected: { [key: string]: string[] } = {};
  cat!: string;

  constructor() {}
}
