import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appPopUp]',
  standalone: true,
})
export class PopUpDirective {
  @Input('appToggleOverlay') overlaySelector!: string;
  constructor(private ele: ElementRef, private Renderer2: Renderer2) {
    console.log(this.overlaySelector);
  }

  @HostListener('click') togglemodel() {
    const overlay = document.querySelector('.overlay') as HTMLElement;
    if (overlay) {
      const isVisible = getComputedStyle(overlay).display === 'block';
      this.Renderer2.setStyle(overlay, 'display', isVisible ? 'none' : 'block');
    }
  }
}
