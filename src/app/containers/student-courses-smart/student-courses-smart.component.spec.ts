import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCoursesSmartComponent } from './student-courses-smart.component';

describe('StudentCoursesSmartComponent', () => {
  let component: StudentCoursesSmartComponent;
  let fixture: ComponentFixture<StudentCoursesSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCoursesSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCoursesSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
