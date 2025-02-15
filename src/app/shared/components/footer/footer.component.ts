import { Component } from '@angular/core';
import { HoverColorDirective } from '../../directive/hover-color/hover-color.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [HoverColorDirective],
templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
