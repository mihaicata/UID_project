import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule,
  MatNativeDateModule, MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule, MatSnackBarModule,
  MatStepperModule,
  MatTableModule, MatTabsModule,
  MatToolbarModule, MatTreeModule
} from '@angular/material';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {RouterModule} from '@angular/router';
import { LoginPageSmartComponent } from './containers/login-page-smart/login-page-smart.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HomepageSmartComponent } from './containers/homepage-smart/homepage-smart.component';
import { StudentPageComponent } from './components/student-page/student-page.component';
import { StudentPageSmartComponent } from './containers/student-page-smart/student-page-smart.component';
import { SecretaryPageComponent } from './components/secretary-page/secretary-page.component';
import { SecretaryPageSmartComponent } from './containers/secretary-page-smart/secretary-page-smart.component';
import { TeacherPageComponent } from './components/teacher-page/teacher-page.component';
import { TeacherPageSmartComponent } from './containers/teacher-page-smart/teacher-page-smart.component';
import { EnrollmentPageComponent } from './components/enrollment-page/enrollment-page.component';
import { EnrollmentPageSmartComponent } from './containers/enrollment-page-smart/enrollment-page-smart.component';
import { StudentGradesSmartComponent } from './containers/student-grades-smart/student-grades-smart.component';
import { StudentGradesPageComponent } from './components/student-grades-page/student-grades-page.component';
import { TableComponent } from './components/table/table.component';
import { TeacherCourseActivitiesSmartComponent } from './containers/teacher-course-activities-smart/teacher-course-activities-smart.component';
import { TeacherCourseActivitiesComponent } from './components/teacher-course-activities/teacher-course-activities.component';
import { ActivityGradedSmartComponent } from './containers/activity-graded-smart/activity-graded-smart.component';
import { ActivityGradedPageComponent } from './components/activity-graded-page/activity-graded-page.component';
import { AssignmentsSmartComponent } from './containers/assignments-smart/assignments-smart.component';
import { QuizzesSmartComponent } from './containers/quizzes-smart/quizzes-smart.component';
import { ProjectsSmartComponent } from './containers/projects-smart/projects-smart.component';
import { ExamsSmartComponent } from './containers/exams-smart/exams-smart.component';
import { AssignmentsPageComponent } from './components/assignments-page/assignments-page.component';
import { QuizzesPageComponent } from './components/quizzes-page/quizzes-page.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { ExamsPageComponent } from './components/exams-page/exams-page.component';
import { GradedActivitiesComponent } from './components/graded-activities/graded-activities.component';
import { StudentsActivitiesTableComponent } from './components/students-activities-table/students-activities-table.component';
import { StudentCoursesSmartComponent } from './containers/student-courses-smart/student-courses-smart.component';
import { StudentCoursesPageComponent } from './components/student-courses-page/student-courses-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageSmartComponent,
    LoginFormComponent,
    HomepageComponent,
    HomepageSmartComponent,
    StudentPageComponent,
    StudentPageSmartComponent,
    SecretaryPageComponent,
    SecretaryPageSmartComponent,
    TeacherPageComponent,
    TeacherPageSmartComponent,
    StudentPageSmartComponent,
    EnrollmentPageComponent,
    EnrollmentPageSmartComponent,
    StudentGradesSmartComponent,
    StudentGradesPageComponent,
    TableComponent,
    TeacherCourseActivitiesSmartComponent,
    TeacherCourseActivitiesComponent,
    ActivityGradedSmartComponent,
    ActivityGradedPageComponent,
    AssignmentsSmartComponent,
    QuizzesSmartComponent,
    ProjectsSmartComponent,
    ExamsSmartComponent,
    AssignmentsPageComponent,
    QuizzesPageComponent,
    ProjectsPageComponent,
    ExamsPageComponent,
    GradedActivitiesComponent,
    StudentsActivitiesTableComponent,
    StudentCoursesSmartComponent,
    StudentCoursesPageComponent
  ],
  imports: [
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule, MatFormFieldModule, MatCardModule, MatTableModule, MatButtonModule, MatCheckboxModule,
    MatDividerModule, MatIconModule, MatGridListModule, MatListModule, MatSidenavModule, MatDialogModule,
    MatToolbarModule, MatDatepickerModule, MatSelectModule, FormsModule,
    MatNativeDateModule, MatExpansionModule, MatStepperModule, MatChipsModule, MatBadgeModule,
    MatAutocompleteModule, MatProgressSpinnerModule, MatMenuModule, MatTabsModule, MatTreeModule, RouterModule, MatSnackBarModule,
    MDBBootstrapModule.forRoot(), MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
