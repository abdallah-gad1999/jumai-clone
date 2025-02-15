import { Component } from '@angular/core';
import { Iproduct } from '../../../shared/model/products/iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products$!:Iproduct[]
}
