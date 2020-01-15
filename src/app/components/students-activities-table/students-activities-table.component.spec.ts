import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsActivitiesTableComponent } from './students-activities-table.component';

describe('StudentsActivitiesTableComponent', () => {
  let component: StudentsActivitiesTableComponent;
  let fixture: ComponentFixture<StudentsActivitiesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsActivitiesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsActivitiesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
