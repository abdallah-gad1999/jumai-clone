import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersCancledComponent } from './orders-cancled.component';

describe('OrdersCancledComponent', () => {
  let component: OrdersCancledComponent;
  let fixture: ComponentFixture<OrdersCancledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersCancledComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdersCancledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
