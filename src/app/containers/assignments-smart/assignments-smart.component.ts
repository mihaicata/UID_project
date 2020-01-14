import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AssignmentsService} from '../../core/services/assignments.service';
import {Grade} from '../../core/models/grade';
import {Student} from '../../student';

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
    this.router.navigate([`students`, idStudent], {relativeTo: this.route} );
  }

  onPostGrade({id, grade}: {id: number, grade: number}) {
    const gradeObject = new Grade();
    gradeObject.grade = grade;
    gradeObject.percentage = grade * 0.1;
    gradeObject.activity = 'Assignment';
    gradeObject.range = '0 - 10';

     // let gradedStudent = new Student();

    this.assignmentsService.getStudentsForAssignments();
    const assignments = this.assignmentsService.assignmentsStudentsValue;
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
