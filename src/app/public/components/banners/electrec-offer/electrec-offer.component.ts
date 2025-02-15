import { Component, Input } from '@angular/core';
import { IsecImgs } from '../../../../shared/model/products/isec-imgs';
import { CardHoverDirective } from '../../../../shared/directive/card-hover.directive';

@Component({
  selector: 'app-electrec-offer',
  standalone: true,
  imports: [CardHoverDirective],
templateUrl: './electrec-offer.component.html',
  styleUrl: './electrec-offer.component.css'
})
export class ElectrecOfferComponent {

}
