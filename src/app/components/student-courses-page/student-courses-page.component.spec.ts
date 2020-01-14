import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCoursesPageComponent } from './student-courses-page.component';

describe('StudentCoursesPageComponent', () => {
  let component: StudentCoursesPageComponent;
  let fixture: ComponentFixture<StudentCoursesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCoursesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
