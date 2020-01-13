import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCourseActivitiesSmartComponent } from './teacher-course-activities-smart.component';

describe('TeacherCourseActivitiesSmartComponent', () => {
  let component: TeacherCourseActivitiesSmartComponent;
  let fixture: ComponentFixture<TeacherCourseActivitiesSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherCourseActivitiesSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCourseActivitiesSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
