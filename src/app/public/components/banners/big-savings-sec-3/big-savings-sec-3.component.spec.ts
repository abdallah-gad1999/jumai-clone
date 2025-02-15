import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigSavingsSec3Component } from './big-savings-sec-3.component';

describe('BigSavingsSec3Component', () => {
  let component: BigSavingsSec3Component;
  let fixture: ComponentFixture<BigSavingsSec3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigSavingsSec3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BigSavingsSec3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
