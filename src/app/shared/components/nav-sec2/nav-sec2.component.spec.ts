import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSec2Component } from './nav-sec2.component';

describe('NavSec2Component', () => {
  let component: NavSec2Component;
  let fixture: ComponentFixture<NavSec2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavSec2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavSec2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
