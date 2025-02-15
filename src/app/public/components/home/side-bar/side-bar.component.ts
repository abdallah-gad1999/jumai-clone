import { Component, OnInit } from '@angular/core';
import { HoverColorDirective } from '../../../../shared/directive/hover-color/hover-color.directive';
import { Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectProductsByCategory } from '../../../../store/product/products.Selector';
import { Location } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [HoverColorDirective, RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent implements OnInit {
  constructor(private router: Router,private location:Location) {}

  ngOnInit(): void {}

  onCategorySelect(category: string) {
    this.router.navigate(['/public/products'], {
      queryParams: {cat:category },
    })
  }

  onsubCatChange(subCat: string) {
    this.router.navigate(['/public/products'], {
      queryParams: { subCat },
      queryParamsHandling:'merge'

    });
  }

  ontypeChange(type:string){
    this.router.navigate(['/public/products'],{
      queryParams:{type},
      queryParamsHandling:'merge'
    })
  }
}
