import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAdressComponent } from './check-adress.component';

describe('CheckAdressComponent', () => {
  let component: CheckAdressComponent;
  let fixture: ComponentFixture<CheckAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckAdressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
