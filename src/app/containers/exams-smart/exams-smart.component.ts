import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Grade} from '../../core/models/grade';
import {Student} from '../../student';
import {ExamsService} from '../../core/services/exams.service';
import {ActivityStudent} from '../../core/models/activity-student';
import {Activity} from '../../core/models/activity';

@Component({
  selector: 'app-exams-smart',
  templateUrl: './exams-smart.component.html',
  styleUrls: ['./exams-smart.component.css']
})
export class ExamsSmartComponent implements OnInit {


  @Output() postGrade = new EventEmitter<{id: number, grade: number}>();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private examsService: ExamsService) { }

  ngOnInit() {
  }

  onView(idStudent: number) {
    this.router.navigate([`students`, idStudent], {relativeTo: this.route} );
  }


  onPostGrade({id, grade}: {id: number, grade: number}) {
    const gradeObject = new Grade();
    gradeObject.grade = grade;
    gradeObject.percentage = grade * 0.1;
    gradeObject.activity = 'Exam';
    gradeObject.range = '0 - 10';

    // let gradedStudent = new Student();

    this.examsService.getStudentsForExams();
    const assignments = this.examsService.examsStudentsValue;
    assignments.filter((student) => student.id === id
    )
      .map((activityStudent: ActivityStudent) => {
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
  }
}
