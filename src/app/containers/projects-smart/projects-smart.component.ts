import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Grade} from '../../core/models/grade';
import {Student} from '../../student';
import {ProjectsService} from '../../core/services/projects.service';
import {ActivityStudent} from '../../core/models/activity-student';
import {Activity} from '../../core/models/activity';

@Component({
  selector: 'app-projects-smart',
  templateUrl: './projects-smart.component.html',
  styleUrls: ['./projects-smart.component.css']
})
export class ProjectsSmartComponent implements OnInit {


  @Output() postGrade = new EventEmitter<{id: number, grade: number}>();

  navigationSubscription;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private projectsService: ProjectsService) { }

  ngOnInit() {

  }

  onView(idStudent: number) {
    this.router.navigate([`students`, idStudent], {relativeTo: this.route} );
  }

  onPostGrade({id, grade}: {id: number, grade: number}) {
    const gradeObject = new Grade();
    gradeObject.grade = grade;
    gradeObject.percentage = grade * 0.1;
    gradeObject.activity = 'Project';
    gradeObject.range = '0 - 10';


    this.projectsService.getStudentsForProjects();
    const assignments = this.projectsService.projectsStudentsValue;
    assignments.filter((activityStudent: ActivityStudent) => {
      console.log(activityStudent);
      const newActivity = new Activity();
      newActivity.grade = gradeObject;
      newActivity.name = activityStudent.activity.name;
      newActivity.fileUrl = activityStudent.activity.fileUrl;
      const gradedStudent = {
        ...activityStudent,
        activity: newActivity
      };
      Object.assign(activityStudent, gradedStudent);
      return activityStudent;
    });
    this.router.navigate(['..'], {relativeTo: this.route});

  }



}
