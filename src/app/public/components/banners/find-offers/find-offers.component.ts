import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardHoverDirective } from '../../../../shared/directive/card-hover.directive';

@Component({
  selector: 'app-find-offers',
  standalone: true,
  imports: [RouterLink,CardHoverDirective],
templateUrl: './find-offers.component.html',
  styleUrl: './find-offers.component.css'
})
export class FindOffersComponent {

}
