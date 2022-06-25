import { TestBed } from '@angular/core/testing';

import { GuestFriendService } from './guest-friend.service';

describe('GuestFriendService', () => {
  let service: GuestFriendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestFriendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
