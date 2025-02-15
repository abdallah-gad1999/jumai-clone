import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { InpoxComponent } from './inpox/inpox.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Sec1Component } from '../banners/sec-1/sec-1.component';
import { BigSavingsSec3Component } from '../banners/big-savings-sec-3/big-savings-sec-3.component';
import { FindOffersComponent } from '../banners/find-offers/find-offers.component';
import { AffordablePricesComponent } from '../banners/affordable-prices/affordable-prices.component';
import { FashionOffersComponent } from '../banners/fashion-offers/fashion-offers.component';
import { ElectrecOfferComponent } from '../banners/electrec-offer/electrec-offer.component';
import { FurnitureOfferComponent } from '../banners/furniture-offer/furniture-offer.component';
import { IsecImgs } from '../../../shared/model/products/isec-imgs';
import { HomeBanComponent } from './../banners/home-ban/home-ban.component';
import { SliderComponent } from '../../../shared/components/slider/slider.component';
import { Observable, of } from 'rxjs';
import { Iproduct } from '../../../shared/model/products/iproduct';
import { ProductsService } from '../../../shared/services/products/products.service';
import { Store } from '@ngrx/store';
import { Title } from '@angular/platform-browser';
import { LoadingService } from '../../../shared/services/loading/loading.service';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    MainCarouselComponent,
    InpoxComponent,
    SideBarComponent,
    CommonModule,
    Sec1Component,
    BigSavingsSec3Component,
    FindOffersComponent,
    AffordablePricesComponent,
    FashionOffersComponent,
    ElectrecOfferComponent,
    FurnitureOfferComponent,
    HomeBanComponent,
    SliderComponent,
    AsyncPipe,
  ],
})
export class HomeComponent implements OnInit {
  Featured!: Observable<Iproduct[]>;
  BestSeller!: Observable<Iproduct[]>;
  FlashSale!: Observable<Iproduct[]>;
  phone!: Observable<Iproduct[]>;

  constructor(
    private ProductsService: ProductsService,
    private store: Store,
    private titel: Title,
    private LoadingService: LoadingService
  ) {}
  ngOnInit(): void {
    this.titel.setTitle(
      'تسوق عبر الانترنت اجهزة , اكسسوارات,ازياء ,وخلافة من منتجاتك المفضلة'
    );
    this.LoadingService.show();
    this.ProductsService.getProductsByQuery([
      { field: 'Featured', operator: '==', value: true },
    ]).subscribe((products) => {
      this.Featured = of(products);
      this.LoadingService.hide();
    });

    this.ProductsService.getProductsByQuery([
      { field: 'BestSeller', operator: '==', value: true },
    ]).subscribe((products) => {
      this.BestSeller = of(products);
    });

    this.ProductsService.getProductsByQuery([
      { field: 'FlashSale', operator: '==', value: true },
    ]).subscribe((products) => {
      this.FlashSale = of(products);
    });

    this.ProductsService.getProductsByQuery([
      { field: 'category', operator: '==', value: 'phone' },
    ]).subscribe((products) => {
      this.phone = of(products);
    });
  }

  banners: IsecImgs[] = [
    {
      img: '/assets/images/ubdate/banners/cars-banner/1AllAR.png',
      path: '/offers',
    },
    {
      img: '/assets/images/ubdate/banners/cars-banner/BUYAR.gif',
      path: '/offers',
    },
    {
      img: '/assets/images/ubdate/banners/cars-banner/DayAR.png',
      path: '/offers',
    },
    {
      img: '/assets/images/ubdate/banners/cars-banner/Flash-sale.gif',
      path: '/offers',
    },
    { img: '/assets/images/ubdate/banners/cars-banner/Force-AR.png', path: '' },
    { img: '/assets/images/ubdate/banners/cars-banner/ShopAR.png', path: '' },
  ];
  banners2: IsecImgs[] = [
    {
      img: '/assets/images/ubdate/banners/cars-banner/foot/freelink-ar.gif',
      path: '',
    },
    {
      img: '/assets/images/ubdate/banners/cars-banner/foot/BUYAR.gif',
      path: '',
    },
    {
      img: '/assets/images/ubdate/banners/cars-banner/foot/GiftAR.gif',
      path: '',
    },
    {
      img: '/assets/images/ubdate/banners/cars-banner/foot/NewAR.gif',
      path: '',
    },
    {
      img: '/assets/images/ubdate/banners/cars-banner/foot/OfficialAR.png',
      path: '',
    },
    {
      img: '/assets/images/ubdate/banners/cars-banner/foot/RedeemAR.png',
      path: '',
    },
  ];

  fashion: IsecImgs[] = [
    {
      img: '/assets/images/ubdate/banners/fashion-banner/snekrs.png',
      path: '',
    },
    {
      img: '/assets/images/ubdate/banners/fashion-banner/Artboard2copy6.png',
      path: '',
    },
    {
      img: '/assets/images/ubdate/banners/fashion-banner/Artboard2copy6-2.png',
      path: '',
    },
    {
      img: '/assets/images/ubdate/banners/fashion-banner/Artboard2copy6-5.png',
      path: '',
    },
    {
      img: '/assets/images/ubdate/banners/fashion-banner/Artboard6copy6-3.png',
      path: '',
    },
    {
      img: '/assets/images/ubdate/banners/fashion-banner/Artboard2copy6-4.png',
      path: '',
    },
  ];

  beauty: IsecImgs[] = [
    { img: '/assets/images/ubdate/banners/beauty-face/1.png', path: '' },
    { img: '/assets/images/ubdate/banners/beauty-face/2.png', path: '' },
    { img: '/assets/images/ubdate/banners/beauty-face/3.png', path: '' },
    { img: '/assets/images/ubdate/banners/beauty-face/4.png', path: '' },
    { img: '/assets/images/ubdate/banners/beauty-face/5.png', path: '' },
    { img: '/assets/images/ubdate/banners/beauty-face/6.png', path: '' },
  ];
}
