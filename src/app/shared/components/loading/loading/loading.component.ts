import { Component } from '@angular/core';
import { LoadingService } from './../../../services/loading/loading.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],

  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css',
})
export class LoadingComponent {
  isLoading$!:Observable<boolean>
  constructor(private loadingService: LoadingService) {
    this.isLoading$ = this.loadingService.loading$
    console.log(this.isLoading$);

  }
}
