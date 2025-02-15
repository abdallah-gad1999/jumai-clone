import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsRateComponent } from './reviews-rate.component';

describe('ReviewsRateComponent', () => {
  let component: ReviewsRateComponent;
  let fixture: ComponentFixture<ReviewsRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewsRateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewsRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
