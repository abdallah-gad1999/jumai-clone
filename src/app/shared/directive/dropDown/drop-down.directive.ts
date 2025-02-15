import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropDown]',
  standalone: true,
})
export class DropDownDirective {
  isOpen: boolean = false;

  constructor(private ele: ElementRef, private Renderer: Renderer2) {}

  @HostListener('document:click', ['$event']) toggle(event: Event) {
    const clickedInside = this.ele.nativeElement.contains(event.target);
    this.isOpen = clickedInside ? !this.isOpen : false;

    const dropMenu = this.ele.nativeElement.querySelector('.drop-menu');
    if (dropMenu) {
      if (this.isOpen) {
        this.Renderer.addClass(dropMenu, 'open');
      } else {
        this.Renderer.removeClass(dropMenu, 'open');
      }
    }
  }
}
