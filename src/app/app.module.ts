import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecretaryViewStudentsComponent } from './secretary-view-students/secretary-view-students.component';
import { TeacherUploadLecturesComponent } from './teacher-upload-lectures/teacher-upload-lectures.component';

@NgModule({
  declarations: [
    AppComponent,
    SecretaryViewStudentsComponent,
    TeacherUploadLecturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
