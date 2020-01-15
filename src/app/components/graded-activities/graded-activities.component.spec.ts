import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradedActivitiesComponent } from './graded-activities.component';

describe('GradedActivitiesComponent', () => {
  let component: GradedActivitiesComponent;
  let fixture: ComponentFixture<GradedActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradedActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradedActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
