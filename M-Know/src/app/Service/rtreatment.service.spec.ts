import { TestBed } from '@angular/core/testing';

import { RTreatmentService } from './rtreatment.service';

describe('RTreatmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RTreatmentService = TestBed.get(RTreatmentService);
    expect(service).toBeTruthy();
  });
});
