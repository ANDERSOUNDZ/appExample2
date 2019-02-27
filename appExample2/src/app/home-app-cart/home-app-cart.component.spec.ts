import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAppCartComponent } from './home-app-cart.component';

describe('HomeAppCartComponent', () => {
  let component: HomeAppCartComponent;
  let fixture: ComponentFixture<HomeAppCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAppCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAppCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
