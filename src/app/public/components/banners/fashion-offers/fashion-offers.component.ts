import { Component, Input, input } from '@angular/core';
import { Iproduct } from '../../../../shared/model/products/iproduct';
import { IsecImgs } from '../../../../shared/model/products/isec-imgs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fashion-offers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fashion-offers.component.html',
  styleUrl: './fashion-offers.component.css',
})
export class FashionOffersComponent {
  @Input('img') img!: IsecImgs[];
  @Input() title!: string;
  @Input() color!: string;


}
