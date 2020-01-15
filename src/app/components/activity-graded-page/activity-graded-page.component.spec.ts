import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityGradedPageComponent } from './activity-graded-page.component';

describe('ActivityGradedPageComponent', () => {
  let component: ActivityGradedPageComponent;
  let fixture: ComponentFixture<ActivityGradedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityGradedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityGradedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
