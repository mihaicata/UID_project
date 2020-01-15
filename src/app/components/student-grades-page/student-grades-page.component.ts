import {Component, Input, OnInit} from '@angular/core';
import {GradesUIDService} from '../../core/services/gradesUID.service';
import {AssignmentsService} from '../../core/services/assignments.service';
import {ExamsService} from '../../core/services/exams.service';
import {ProjectsService} from '../../core/services/projects.service';
import {QuizzesService} from '../../core/services/quizzes.service';
import {Grade} from '../../core/models/grade';
import {ActivityStudent} from '../../core/models/activity-student';
import {Activity} from '../../core/models/activity';
import {Activities} from '../../core/enums/activities.enum';

@Component({
  selector: 'app-student-grades-page',
  templateUrl: './student-grades-page.component.html',
  styleUrls: ['./student-grades-page.component.css']
})
export class StudentGradesPageComponent implements OnInit {

  @Input() title = 'Curs';
  @Input() studentId: number;

  constructor(private gradesUIDService: GradesUIDService,
              private assignmentsService: AssignmentsService,
              private examsService: ExamsService,
              private projectsService: ProjectsService,
              private quizzesService: QuizzesService) { }

  ngOnInit() {

    this.assignmentsService.getStudentsForAssignments();
    this.examsService.getStudentsForExams();
    this.projectsService.getStudentsForProjects();
    this.quizzesService.getStudentsForQuizzes();

  }

  getAssignmentsGrades(): Grade[] {
    // console.log(this.studentId);
    // const studentAssignments: ActivityStudent[] = this.assignmentsService.assignmentsStudentsValue
    //   .filter((activityStudent: ActivityStudent) =>this.studentId === activityStudent.student.id && activityStudent.activity.name === Activities.ASSIGNMENT)
    //     .map((activityStudent) => {
    //     const grade = new Grade();
    //     grade.activity = activityStudent.activity.name;
    //     const newActivity: Activity = new Activity();
    //     newActivity.grade = grade;
    //     newActivity.name = activityStudent.activity.name;
    //     newActivity.fileUrl = activityStudent.activity.fileUrl;
    //     const newActivityStudent: ActivityStudent = {
    //       ...activityStudent,
    //       activity: newActivity
    //     };
    //     Object.assign(activityStudent, newActivityStudent);
    //     return activityStudent;
    //   })
    // ;
    //
    // const grades: Grade[] = studentAssignments.map((studentActivity: ActivityStudent) => studentActivity.activity.grade);
    // console.log(grades);
    // return grades;
    return this.gradesUIDService.assignmentsGrades;
  }

  getQuizzesGrades(): Grade[] {
    // const studentAssignments: ActivityStudent[] = this.quizzesService.quizzesStudentsValue
    //   .filter((activityStudent: ActivityStudent) => this.studentId === activityStudent.student.id && activityStudent.activity.name === Activities.QUIZ)
    //   .map((activityStudent) => {
    //     const grade = new Grade();
    //     grade.activity = activityStudent.activity.name;
    //     const newActivity: Activity = new Activity();
    //     newActivity.grade = grade;
    //     newActivity.name = activityStudent.activity.name;
    //     newActivity.fileUrl = activityStudent.activity.fileUrl;
    //     const newActivityStudent: ActivityStudent = {
    //       ...activityStudent,
    //       activity: newActivity
    //     };
    //     Object.assign(activityStudent, newActivityStudent);
    //     return activityStudent;
    //   })
    // ;
    //
    // const grades: Grade[] = studentAssignments.map((studentActivity: ActivityStudent) => studentActivity.activity.grade);
    // console.log(grades);
    // return grades;
    return this.gradesUIDService.quizzesGrades
  }

  getProjectGrades(): Grade[] {
    // const studentAssignments: ActivityStudent[] = this.projectsService.projectsStudentsValue
    //   .filter((activityStudent: ActivityStudent) => this.studentId === activityStudent.student.id && activityStudent.activity.name === Activities.PROJECT)
    //   .map((activityStudent) => {
    //     const grade = new Grade();
    //     grade.activity = activityStudent.activity.name;
    //     const newActivity: Activity = new Activity();
    //     newActivity.grade = grade;
    //     newActivity.name = activityStudent.activity.name;
    //     newActivity.fileUrl = activityStudent.activity.fileUrl;
    //     const newActivityStudent: ActivityStudent = {
    //       ...activityStudent,
    //       activity: newActivity
    //     };
    //     Object.assign(activityStudent, newActivityStudent);
    //     return activityStudent;
    //   })
    // ;
    //
    // const grades: Grade[] = studentAssignments.map((studentActivity: ActivityStudent) => studentActivity.activity.grade);
    // console.log(grades);
    // return grades;
    return this.gradesUIDService.projectGrades;
  }

  getExamsGrades(): Grade[] {
    // const studentAssignments: ActivityStudent[] = this.examsService.examsStudentsValue
    //   .filter((activityStudent: ActivityStudent) => activityStudent.student.id === this.studentId && activityStudent.activity.name === Activities.EXAM)
    //   .map((activityStudent) => {
    //     const grade = new Grade();
    //     grade.activity = activityStudent.activity.name;
    //     const newActivity: Activity = new Activity();
    //     newActivity.grade = grade;
    //     newActivity.name = activityStudent.activity.name;
    //     newActivity.fileUrl = activityStudent.activity.fileUrl;
    //     const newActivityStudent: ActivityStudent = {
    //       ...activityStudent,
    //       activity: newActivity
    //     };
    //     Object.assign(activityStudent, newActivityStudent);
    //     return activityStudent;
    //   })
    // ;
    //
    // const grades: Grade[] = studentAssignments.map((studentActivity: ActivityStudent) => studentActivity.activity.grade);
    // console.log(grades);
    // return grades;
    return this.gradesUIDService.examsGrades;
  }




}
