import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryViewStudentsComponent } from './secretary-view-students.component';

describe('SecretaryViewStudentsComponent', () => {
  let component: SecretaryViewStudentsComponent;
  let fixture: ComponentFixture<SecretaryViewStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretaryViewStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretaryViewStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
