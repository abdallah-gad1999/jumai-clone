import { Component } from '@angular/core';
import { CardHoverDirective } from '../../../../shared/directive/card-hover.directive';

@Component({
  selector: 'app-affordable-prices',
  standalone: true,
  imports: [CardHoverDirective],
templateUrl: './affordable-prices.component.html',
  styleUrl: './affordable-prices.component.css'
})
export class AffordablePricesComponent {

}
