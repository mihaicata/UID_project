import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCourseActivitiesComponent } from './teacher-course-activities.component';

describe('TeacherCourseActivitiesComponent', () => {
  let component: TeacherCourseActivitiesComponent;
  let fixture: ComponentFixture<TeacherCourseActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherCourseActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCourseActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
