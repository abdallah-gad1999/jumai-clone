import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffordablePricesComponent } from './affordable-prices.component';

describe('AffordablePricesComponent', () => {
  let component: AffordablePricesComponent;
  let fixture: ComponentFixture<AffordablePricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffordablePricesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AffordablePricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
