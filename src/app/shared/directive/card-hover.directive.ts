import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardHover]',
  standalone: true
})
export class CardHoverDirective {

  constructor(private ele:ElementRef) {
    this.ele.nativeElement.style.transition  = '0.3s'

  }

  @HostListener('mouseover') over(){
    this.ele.nativeElement.style.boxShadow =  '0 2px 8px rgba(0, 0, 0, 0.2)'
    this.ele.nativeElement.style.transform = 'scale(1.005)'
    this.ele.nativeElement.style.borderRadius = '4px'
  }

  @HostListener('mouseout') out(){
    this.ele.nativeElement.style.transform = 'scale(1)'
    this.ele.nativeElement.style.border = 'none'
    this.ele.nativeElement.style.boxShadow =  'none'
  }

}
