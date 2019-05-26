import { TestBed } from '@angular/core/testing';

import { RPublicationService } from './rpublication.service';

describe('RPublicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RPublicationService = TestBed.get(RPublicationService);
    expect(service).toBeTruthy();
  });
});
