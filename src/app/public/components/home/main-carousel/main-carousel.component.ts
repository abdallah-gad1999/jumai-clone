import {
  Component,
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Swiper } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';

@Component({
  selector: 'app-main-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainCarouselComponent  {
  slideImgs:{img:string,url:string}[] = []
  screenZise!: string;
  constructor() {


    this.slideImgs = [
      {img:'/assets/images/ubdate/carousel/1.gif',url:''},
      {img:'/assets/images/ubdate/carousel/2.jpg',url:''},
      {img:'/assets/images/ubdate/carousel/3.png',url:''},
      {img:'/assets/images/ubdate/carousel/4.jpg',url:''},
      {img:'/assets/images/ubdate/carousel/5.jpg',url:''},
      {img:'/assets/images/ubdate/carousel/6.jpg',url:''},
      {img:'/assets/images/ubdate/carousel/7.jpg',url:''},
      {img:'/assets/images/ubdate/carousel/8.jpg',url:''},
    ]
  }


}
