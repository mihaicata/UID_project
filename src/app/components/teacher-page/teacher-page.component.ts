import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.css']
})
export class TeacherPageComponent implements OnInit {

  displayedColumns: string[] = ['announcements'];
  messages: string[] = [];
  body: string;
  title: string;
  srcResult;
  dataSource = new MatTableDataSource<string>();
  viewUploadLectures: boolean;
  viewEmails: boolean;
  viewComposeEmail: boolean;
  emails = [{name: 'Potolea Rodica', topic: 'Department meeting at 16'}, {name: 'Fried Johanna', topic: 'Student complaints'}];
  private selected: ({ name: string; topic: string } | { name: string; topic: string })[];

  constructor() {
    this.messages.push('Google AI Course');

  }

  ngOnInit() {
    this.viewUploadLectures = false;
    this.viewEmails = false;
    this.viewComposeEmail = false;
    this.selected = this.emails;
  }

  public showTable() {
    if (this.title !== null) {
      this.messages.push(this.title);
    }
  }

  seeEmails() {
    this.viewEmails = this.viewEmails !== true;
    this.selected = this.emails;
  }

  composeEmail() {
    this.viewComposeEmail = this.viewComposeEmail !== true;
  }

  refresh() {
    this.dataSource.data = this.messages;

  }
  onFileSelected() {
    const inputNode: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };

      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }

  uploadLectures() {
    this.viewUploadLectures = this.viewUploadLectures !== true;
  }

  sendEmail() {
  }
}
