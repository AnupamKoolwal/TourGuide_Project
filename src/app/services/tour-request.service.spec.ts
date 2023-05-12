import { TestBed } from '@angular/core/testing';

import { TourRequestService } from './tour-request.service';

describe('TourRequestService', () => {
  let service: TourRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
