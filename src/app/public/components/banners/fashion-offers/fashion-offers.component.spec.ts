import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionOffersComponent } from './fashion-offers.component';

describe('FashionOffersComponent', () => {
  let component: FashionOffersComponent;
  let fixture: ComponentFixture<FashionOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FashionOffersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FashionOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
