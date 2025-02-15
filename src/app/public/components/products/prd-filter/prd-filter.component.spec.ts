import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdFilterComponent } from './prd-filter.component';

describe('PrdFilterComponent', () => {
  let component: PrdFilterComponent;
  let fixture: ComponentFixture<PrdFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrdFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrdFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
