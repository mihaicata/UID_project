import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSmartComponent } from './projects-smart.component';

describe('ProjectsSmartComponent', () => {
  let component: ProjectsSmartComponent;
  let fixture: ComponentFixture<ProjectsSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
