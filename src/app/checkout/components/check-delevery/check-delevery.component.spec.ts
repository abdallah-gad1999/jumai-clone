import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckDeleveryComponent } from './check-delevery.component';

describe('CheckDeleveryComponent', () => {
  let component: CheckDeleveryComponent;
  let fixture: ComponentFixture<CheckDeleveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckDeleveryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckDeleveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
