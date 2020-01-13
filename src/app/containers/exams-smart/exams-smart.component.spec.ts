import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsSmartComponent } from './exams-smart.component';

describe('ExamsSmartComponent', () => {
  let component: ExamsSmartComponent;
  let fixture: ComponentFixture<ExamsSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamsSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamsSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
