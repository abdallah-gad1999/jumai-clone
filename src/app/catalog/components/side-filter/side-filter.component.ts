import { Component } from '@angular/core';
import { Icategory } from '../../../shared/model/category/icategory';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-filter.component.html',
  styleUrl: './side-filter.component.css'
})
export class SideFilterComponent {
  category!:Icategory[]
}
