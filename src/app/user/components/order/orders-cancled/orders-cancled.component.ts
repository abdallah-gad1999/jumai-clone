import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-orders-cancled',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './orders-cancled.component.html',
  styleUrl: './orders-cancled.component.css'
})
export class OrdersCancledComponent {
  constructor(private title:Title) {

    this.title.setTitle('الطلبات الملغاة')
  }
}

