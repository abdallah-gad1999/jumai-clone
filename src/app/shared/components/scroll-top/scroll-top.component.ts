import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  imports: [],
  templateUrl: './scroll-top.component.html',
  styleUrl: './scroll-top.component.css',
})
export class ScrollTopComponent {
  @ViewChild('scroll') scrollEle!: ElementRef;
  @HostListener('window:scroll', ['$event']) onScroll(event: Event) {
    if (window.scrollY >= 500) {
      this.scrollEle.nativeElement.style.left = '15px';
    } else {
      this.scrollEle.nativeElement.style.left = '-100px'; // يرجعه للخلف لو المستخدم صعد للأعلى
    }
  }

  scrollTo(){
    window.scroll({
      top:0,
      behavior:'smooth'
    })
  }
  }

