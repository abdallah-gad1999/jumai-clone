import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectrecOfferComponent } from './electrec-offer.component';

describe('ElectrecOfferComponent', () => {
  let component: ElectrecOfferComponent;
  let fixture: ComponentFixture<ElectrecOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectrecOfferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectrecOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
