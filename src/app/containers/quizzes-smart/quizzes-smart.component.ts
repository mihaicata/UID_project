import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Grade} from '../../core/models/grade';
import {Student} from '../../student';
import {QuizzesService} from '../../core/services/quizzes.service';
import {ActivityStudent} from '../../core/models/activity-student';
import {Activity} from '../../core/models/activity';

@Component({
  selector: 'app-quizzes-smart',
  templateUrl: './quizzes-smart.component.html',
  styleUrls: ['./quizzes-smart.component.css']
})
export class QuizzesSmartComponent implements OnInit {


  @Output() postGrade = new EventEmitter<{id: number, grade: number}>();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private quizzesService: QuizzesService) { }

  ngOnInit() {
  }

  onView(idStudent: number) {
    this.router.navigate([`students`, idStudent], {relativeTo: this.route} );
  }

  onPostGrade({id, grade}: {id: number, grade: number}) {
    const gradeObject = new Grade();
    gradeObject.grade = grade;
    gradeObject.percentage = grade * 0.1;
    gradeObject.activity = 'Quiz';
    gradeObject.range = '0 - 10';

    // let gradedStudent = new Student();

    this.quizzesService.getStudentsForQuizzes();
    const assignments = this.quizzesService.quizzesStudentsValue;
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
  }
}
