import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherUploadLecturesComponent } from './teacher-upload-lectures.component';

describe('TeacherUploadLecturesComponent', () => {
  let component: TeacherUploadLecturesComponent;
  let fixture: ComponentFixture<TeacherUploadLecturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherUploadLecturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherUploadLecturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
