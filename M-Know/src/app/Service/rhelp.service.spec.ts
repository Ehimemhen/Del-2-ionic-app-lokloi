import { TestBed } from '@angular/core/testing';

import { RHelpService } from './rhelp.service';

describe('RHelpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RHelpService = TestBed.get(RHelpService);
    expect(service).toBeTruthy();
  });
});
