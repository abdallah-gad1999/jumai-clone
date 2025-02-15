import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBanComponent } from './home-ban.component';

describe('HomeBanComponent', () => {
  let component: HomeBanComponent;
  let fixture: ComponentFixture<HomeBanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeBanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
