import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckEditComponent } from './check-edit.component';

describe('CheckEditComponent', () => {
  let component: CheckEditComponent;
  let fixture: ComponentFixture<CheckEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
