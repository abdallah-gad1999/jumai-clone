import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../../../../shared/model/products/iproduct';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-reviews',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './product-reviews.component.html',
  styleUrl: './product-reviews.component.css'
})
export class ProductReviewsComponent {
reviews!:Observable<Iproduct>
}
