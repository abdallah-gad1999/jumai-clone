import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckNavComponent } from './check-nav.component';

describe('CheckNavComponent', () => {
  let component: CheckNavComponent;
  let fixture: ComponentFixture<CheckNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
