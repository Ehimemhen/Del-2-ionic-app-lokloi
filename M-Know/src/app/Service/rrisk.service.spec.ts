import { TestBed } from '@angular/core/testing';

import { RRiskService } from './rrisk.service';

describe('RRiskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RRiskService = TestBed.get(RRiskService);
    expect(service).toBeTruthy();
  });
});
