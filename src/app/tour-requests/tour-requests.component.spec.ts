import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourRequestsComponent } from './tour-requests.component';

describe('TourRequestsComponent', () => {
  let component: TourRequestsComponent;
  let fixture: ComponentFixture<TourRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
