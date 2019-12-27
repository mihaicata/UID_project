import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-upload-lectures',
  templateUrl: './teacher-upload-lectures.component.html',
  styleUrls: ['./teacher-upload-lectures.component.css']
})
export class TeacherUploadLecturesComponent implements OnInit {
  messages: String[]=[];
  body:String;
  title:String
  constructor() { 
    this.messages.push("Google AI Course");
  }
  
  ngOnInit() {
  }
  public showTable(){
    if(this.title!=null)
    this.messages.push(this.title)
  }

}
