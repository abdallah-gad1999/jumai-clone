import { TestBed } from '@angular/core/testing';

import { WhishListService } from './whish-list.service';

describe('WhishListService', () => {
  let service: WhishListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhishListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
