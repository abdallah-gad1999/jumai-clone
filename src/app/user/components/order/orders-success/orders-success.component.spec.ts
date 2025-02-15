import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersSuccessComponent } from './orders-success.component';

describe('OrdersSuccessComponent', () => {
  let component: OrdersSuccessComponent;
  let fixture: ComponentFixture<OrdersSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersSuccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdersSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
