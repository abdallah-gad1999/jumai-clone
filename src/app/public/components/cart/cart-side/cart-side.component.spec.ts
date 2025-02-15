import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSideComponent } from './cart-side.component';

describe('CartSideComponent', () => {
  let component: CartSideComponent;
  let fixture: ComponentFixture<CartSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartSideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
