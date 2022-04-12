import { TestBed } from '@angular/core/testing';

import { LaduService } from './ladu.service';

describe('LaduService', () => {
  let service: LaduService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaduService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
