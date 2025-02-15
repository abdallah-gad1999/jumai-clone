import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reviews-rate',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './reviews-rate.component.html',
  styleUrl: './reviews-rate.component.css'
})
export class ReviewsRateComponent {
reviews!:Observable<any>
}
