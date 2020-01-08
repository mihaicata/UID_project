import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGradesSmartComponent } from './student-grades-smart.component';

describe('StudentGradesSmartComponent', () => {
  let component: StudentGradesSmartComponent;
  let fixture: ComponentFixture<StudentGradesSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentGradesSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentGradesSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
