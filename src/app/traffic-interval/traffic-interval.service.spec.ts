import { TestBed } from '@angular/core/testing';

import { TrafficObservationsService } from './traffic-observations.service';

describe('TrafficInterval15Service', () => {
  let service: TrafficObservationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrafficObservationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
