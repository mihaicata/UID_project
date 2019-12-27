import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SecretaryViewStudentsComponent} from './secretary-view-students/secretary-view-students.component'
import {TeacherUploadLecturesComponent} from './teacher-upload-lectures/teacher-upload-lectures.component'


const routes: Routes = [
  {path:'secretaryViewStudents', component:SecretaryViewStudentsComponent},
  {path:'teacherUploadLectures', component:TeacherUploadLecturesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
