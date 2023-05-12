import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourCartComponent } from './tour-cart.component';

describe('TourCartComponent', () => {
  let component: TourCartComponent;
  let fixture: ComponentFixture<TourCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
