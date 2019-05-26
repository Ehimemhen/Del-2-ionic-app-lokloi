import { TestBed } from '@angular/core/testing';

import { RPostService } from './rpost.service';

describe('RPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RPostService = TestBed.get(RPostService);
    expect(service).toBeTruthy();
  });
});
