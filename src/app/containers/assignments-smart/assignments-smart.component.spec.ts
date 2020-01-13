import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentsSmartComponent } from './assignments-smart.component';

describe('AssignmentsSmartComponent', () => {
  let component: AssignmentsSmartComponent;
  let fixture: ComponentFixture<AssignmentsSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentsSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentsSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
