import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityGradedSmartComponent } from './activity-graded-smart.component';

describe('ActivityGradedSmartComponent', () => {
  let component: ActivityGradedSmartComponent;
  let fixture: ComponentFixture<ActivityGradedSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityGradedSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityGradedSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
