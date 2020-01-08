import { TestBed } from '@angular/core/testing';

import { GradesUIDService } from './gradesUID.service';

describe('GradesUIDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GradesUIDService = TestBed.get(GradesUIDService);
    expect(service).toBeTruthy();
  });
});
