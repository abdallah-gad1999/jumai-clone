import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Store } from '@ngrx/store';
import { Observable, map, take, tap } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { HeaderFixedDirective } from '../../directive/header-fixed/header-fixed.directive';
import { SideBarComponent } from '../../../public/components/home/side-bar/side-bar.component';
import { DropDownDirective } from '../../directive/dropDown/drop-down.directive';
import {
  selectToken,
  selectUid,
  selectUserState,
} from '../../../store/auth/userState/userState.selector';
import { UserState } from '../../../store/auth/userState/userState.reducer';
import { signOutAction } from '../../../store/auth/signOut/sign-out.action';
import { Iproduct } from '../../model/products/iproduct';
import { CartService } from '../../../public/components/cart/services/cart/cart.service';
import { ProductsService } from '../../services/products/products.service';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Iuser } from '../../../auth/model/iuser';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    HeaderFixedDirective,
    DropDownDirective,
    SideBarComponent,
    DropDownDirective,
    RouterLink,
    FormsModule,
    MatSlideToggleModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isContentVisible: boolean = true;
  isTabletScreen: boolean = true;
  dropDownMenuVisible: boolean = false;
  token$: Observable<boolean>;
  isAuth: boolean | null = null;
  user$!: Observable<Partial<Iuser> | null>;
  @ViewChild('overlay') overlay!: ElementRef;
  cart$!: Observable<Iproduct[]>;
  constructor(
    private _BreakpointObserver: BreakpointObserver,
    private store: Store<{ auth: 'authState' }>,
    private CartService: CartService,
    private productSevrices: ProductsService,
    private router: Router
  ) {
    this.token$ = this.store.select(selectToken);
    this.user$ = this.store.select(selectUserState);
  }

  ngOnInit() {
    
    this._BreakpointObserver
      .observe(['(max-width:992px)'])
      .subscribe((result) => {
        this.isTabletScreen = result.matches;
      });
    this.token$.subscribe({
      next: (state) => {
        this.isAuth = state;
        console.log(state);
      },
    });

    this.cart$ = this.CartService.getProductDetails()
  }

  // التحكم في إظهار القائمة المنسدلة
  toggleDropdownMenu(): void {
    this.dropDownMenuVisible = !this.dropDownMenuVisible;
  }

  // إغلاق القائمة عند النقر خارجها
  @HostListener('document:click', ['$event'])
  closeDropDown(event: Event): void {
    const clickedInside = (event.target as HTMLElement).closest('.menu-item');
    if (!clickedInside) {
      this.dropDownMenuVisible = false;
    }
  }

  toggleVisibility(): void {
    this.isContentVisible = !this.isContentVisible;
  }

  signout() {
    this.store.dispatch(signOutAction());
  }

  search(name: string) {
    this.router.navigate(['/catalog'], {
      queryParams: { q: name },
    });
  }
}
