import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentPageSmartComponent } from './enrollment-page-smart.component';

describe('EnrollmentPageSmartComponent', () => {
  let component: EnrollmentPageSmartComponent;
  let fixture: ComponentFixture<EnrollmentPageSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollmentPageSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentPageSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
