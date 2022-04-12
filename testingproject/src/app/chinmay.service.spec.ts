import { TestBed } from '@angular/core/testing';

import { ChinmayService } from './chinmay.service';

describe('ChinmayService', () => {
  let service: ChinmayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChinmayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
