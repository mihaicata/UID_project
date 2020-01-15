import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AssignmentsService} from '../../core/services/assignments.service';
import {Grade} from '../../core/models/grade';
import {Student} from '../../student';
import {ActivityStudent} from '../../core/models/activity-student';
import {Activity} from '../../core/models/activity';

@Component({
  selector: 'app-assignments-smart',
  templateUrl: './assignments-smart.component.html',
  styleUrls: ['./assignments-smart.component.css']
})
export class AssignmentsSmartComponent implements OnInit {

  @Output() postGrade = new EventEmitter<{id: number, grade: number}>();


  constructor(private router: Router,
              private route: ActivatedRoute,
              private  assignmentsService: AssignmentsService) { }

  ngOnInit() {
  }

  onView(idStudent: number) {
    // this.router.navigate([`students`, idStudent], {relativeTo: this.route} );
  }



  onPostGrade({id, grade}: {id: number, grade: number}) {
    const gradeObject = new Grade();
    gradeObject.grade = grade;
    gradeObject.percentage = grade * 0.1;
    gradeObject.activity = 'Assignment';
    gradeObject.range = '0 - 10';
    console.log(gradeObject);
     // let gradedStudent = new Student();

    this.assignmentsService.getStudentsForAssignments();
    const assignments: ActivityStudent[] = this.assignmentsService.assignmentsStudentsValue;
    assignments.filter((activityStudent: ActivityStudent) => activityStudent.student.id === id
    )
      .map((activityStudent: ActivityStudent) => {
        console.log(activityStudent);
        const newActivity = new Activity();
        newActivity.grade = gradeObject;
        newActivity.name = activityStudent.activity.name;
        newActivity.fileUrl = activityStudent.activity.fileUrl;
        console.log(newActivity)
        const gradedStudent = {
          ...activityStudent,
          activity: newActivity
        };
        // console.log()
        Object.assign(activityStudent, gradedStudent);
        return activityStudent;
      });
    this.router.navigate(['..'], {relativeTo: this.route});


  }
}
