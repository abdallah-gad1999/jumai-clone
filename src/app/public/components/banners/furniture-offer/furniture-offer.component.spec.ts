import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureOfferComponent } from './furniture-offer.component';

describe('FurnitureOfferComponent', () => {
  let component: FurnitureOfferComponent;
  let fixture: ComponentFixture<FurnitureOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FurnitureOfferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FurnitureOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
