import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InpoxComponent } from './inpox.component';

describe('InpoxComponent', () => {
  let component: InpoxComponent;
  let fixture: ComponentFixture<InpoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InpoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InpoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
