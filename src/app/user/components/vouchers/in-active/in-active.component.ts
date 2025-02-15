import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-in-active',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './in-active.component.html',
  styleUrl: './in-active.component.css'
})
export class InActiveComponent {

}
