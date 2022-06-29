import { TestBed } from '@angular/core/testing';

import { CheckAgeServiceService } from './check-age-service.service';

describe('CheckAgeServiceService', () => {
  let service: CheckAgeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckAgeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
