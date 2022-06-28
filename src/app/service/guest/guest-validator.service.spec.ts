import { TestBed } from '@angular/core/testing';

import { GuestValidatorService } from './guest-validator.service';

describe('GuestValidatorService', () => {
  let service: GuestValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
