import { TestBed } from '@angular/core/testing';

import { RfaqService } from './rfaq.service';

describe('RFaqService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RfaqService = TestBed.get(RfaqService);
    expect(service).toBeTruthy();
  });
});
