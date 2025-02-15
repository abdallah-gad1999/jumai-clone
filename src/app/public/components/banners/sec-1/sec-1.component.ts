import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IsecImgs } from '../../../../shared/model/products/isec-imgs';
import { CardHoverDirective } from '../../../../shared/directive/card-hover.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sec-1',
  standalone: true,
  imports:[CommonModule,CardHoverDirective,RouterLink],
templateUrl: './sec-1.component.html',
  styleUrls: ['./sec-1.component.css'],
})
export class Sec1Component {
  @Input('banner') banner!: IsecImgs[];
}
