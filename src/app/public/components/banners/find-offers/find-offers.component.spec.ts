import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindOffersComponent } from './find-offers.component';

describe('FindOffersComponent', () => {
  let component: FindOffersComponent;
  let fixture: ComponentFixture<FindOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindOffersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
