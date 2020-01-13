import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzesSmartComponent } from './quizzes-smart.component';

describe('QuizzesSmartComponent', () => {
  let component: QuizzesSmartComponent;
  let fixture: ComponentFixture<QuizzesSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizzesSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzesSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
