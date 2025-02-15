import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverColor]',
  standalone: true
})
export class HoverColorDirective {

  constructor(private ele:ElementRef) {

  }


  @HostListener("mouseover")over(){
    this.ele.nativeElement.style.color = '#f68b1e'
    this.ele.nativeElement.transition = '1s'
  }
  @HostListener("mouseleave")out(){
    this.ele.nativeElement.style.color = '#313133'
  }

}
