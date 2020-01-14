import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Grade} from '../../core/models/grade';
import {Student} from '../../student';
import {QuizzesService} from '../../core/services/quizzes.service';

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
    assignments.filter((student) => student.id === id
    )
      .map((student: Student) => {
        const gradedStudent = new Student();
        gradedStudent.id = student.id;
        gradedStudent.firstname = student.firstname;
        gradedStudent.lastname = student.lastname;
        gradedStudent.group = student.group;
        gradedStudent.grade = gradeObject;
        Object.assign(student, gradedStudent);
        return student;
      });

  }
}
