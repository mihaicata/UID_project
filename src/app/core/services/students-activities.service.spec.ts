import { TestBed } from '@angular/core/testing';

import { StudentsActivitiesService } from './students-activities.service';

describe('StudentsActivitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentsActivitiesService = TestBed.get(StudentsActivitiesService);
    expect(service).toBeTruthy();
  });
});
