import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginPageSmartComponent} from './containers/login-page-smart/login-page-smart.component';
import {HomepageSmartComponent} from './containers/homepage-smart/homepage-smart.component';
import {StudentPageSmartComponent} from './containers/student-page-smart/student-page-smart.component';
import {SecretaryPageSmartComponent} from './containers/secretary-page-smart/secretary-page-smart.component';
import {TeacherPageSmartComponent} from './containers/teacher-page-smart/teacher-page-smart.component';
import {EnrollmentPageSmartComponent} from './containers/enrollment-page-smart/enrollment-page-smart.component';
import {ActivityGradedSmartComponent} from './containers/activity-graded-smart/activity-graded-smart.component';
import {TeacherCourseActivitiesSmartComponent} from './containers/teacher-course-activities-smart/teacher-course-activities-smart.component';
import {AssignmentsSmartComponent} from './containers/assignments-smart/assignments-smart.component';
import {QuizzesSmartComponent} from './containers/quizzes-smart/quizzes-smart.component';
import {ProjectsSmartComponent} from './containers/projects-smart/projects-smart.component';
import {ExamsSmartComponent} from './containers/exams-smart/exams-smart.component';
import {StudentGradesSmartComponent} from './containers/student-grades-smart/student-grades-smart.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomepageSmartComponent},
  {path: 'login', component: LoginPageSmartComponent},
  {path: 'Secretary', component: SecretaryPageSmartComponent},
  {path: 'Student', component: StudentPageSmartComponent,
    children: [
      {
        path: 'enroll',
        component: EnrollmentPageSmartComponent
      },
      {
        path: 'grades',
        component: StudentGradesSmartComponent
      }

    ]
  },
  {path: 'Teacher', component: TeacherPageSmartComponent},
  {path: 'Teacher/activities', component: TeacherCourseActivitiesSmartComponent,
  children: [
    {
      path: '', redirectTo: 'assignments', pathMatch: 'full'
    },
    {
      path: 'assignments', component: AssignmentsSmartComponent
    },
    {
      path: 'quizzes', component: QuizzesSmartComponent
    },
    {
      path: 'projects', component: ProjectsSmartComponent
    },
    {
      path: 'exams', component: ExamsSmartComponent
    },
    {
      path: 'assignments/students/:idStudent', component: ActivityGradedSmartComponent
    },
    {
      path: 'quizzes/students/:idStudent', component: ActivityGradedSmartComponent
    },
    {
      path: 'projects/students/:idStudent', component: ActivityGradedSmartComponent
    },
    {
      path: 'exams/students/:idStudent', component: ActivityGradedSmartComponent
    }

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
