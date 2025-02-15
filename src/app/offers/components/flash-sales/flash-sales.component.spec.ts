import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashSalesComponent } from './flash-sales.component';

describe('FlashSalesComponent', () => {
  let component: FlashSalesComponent;
  let fixture: ComponentFixture<FlashSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashSalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlashSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
