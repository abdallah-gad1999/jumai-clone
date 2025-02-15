import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appHeaderFixed]',
  standalone: true,
})
export class HeaderFixedDirective {
  @Input('dromenu') drodMenu!: ElementRef; // القائمة المنسدلة

  constructor(private ele: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll') onScroll() {
    const header = this.ele.nativeElement;
    if (window.scrollY >= 55) {
      this.renderer.addClass(header, 'fixed');
    } else {
      this.renderer.removeClass(header, 'fixed');
    }
  }
}
