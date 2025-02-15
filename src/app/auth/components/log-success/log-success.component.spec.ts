import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSuccessComponent } from './log-success.component';

describe('LogSuccessComponent', () => {
  let component: LogSuccessComponent;
  let fixture: ComponentFixture<LogSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogSuccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
