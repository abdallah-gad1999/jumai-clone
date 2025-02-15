import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContnetComponent } from './main-contnet.component';

describe('MainContnetComponent', () => {
  let component: MainContnetComponent;
  let fixture: ComponentFixture<MainContnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainContnetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainContnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
