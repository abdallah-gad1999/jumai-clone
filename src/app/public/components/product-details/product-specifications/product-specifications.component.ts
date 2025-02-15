import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../../../../shared/model/products/iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-specifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-specifications.component.html',
  styleUrl: './product-specifications.component.css'
})
export class ProductSpecificationsComponent {
  product$!: Iproduct
constructor(private ActivatedRoute:ActivatedRoute){
  this.product$ = this.ActivatedRoute.snapshot.data['productData']
}
}
