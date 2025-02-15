import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { WhishListService } from './services/whish-list.service';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-whish-list',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './whish-list.component.html',
  styleUrl: './whish-list.component.css',
})
export class WhishListComponent implements OnInit {
  wishlistProducts: any[] = [];

  constructor(
    private WhishListService: WhishListService,
    private title: Title
  ) {
    this.title.setTitle('قائمة المفضلة');
  }
  ngOnInit(): void {
    this.WhishListService.getWishlistProducts().subscribe({
      next: (products) => {
        this.wishlistProducts = products;
      },
    });
  }

  removeFromWishlist(id: string) {
    this.WhishListService.AddToFav(id).subscribe();
  }
}
