import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.css']
})
export class TeacherPageComponent implements OnInit {

  displayedColumns: string[] = ['announcements'];
  messages: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(['Google AI Course']);
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
  }

  ngOnInit() {
    this.viewUploadLectures = false;
    this.viewEmails = false;
    this.viewComposeEmail = false;
    this.selected = this.emails;
  }

  public showTable() {
    const currentValue = this.messages.getValue();
    const updatedValue = [...currentValue, this.title];
    this.messages.next(updatedValue);
  }

  seeEmails() {
    this.viewEmails = this.viewEmails !== true;
    this.selected = this.emails;
    this.viewUploadLectures = false;
  }

  composeEmail() {
    this.viewComposeEmail = this.viewComposeEmail !== true;
  }

  refresh() {
    this.dataSource.data = this.messages.value;

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
    this.viewEmails = false;
  }

  sendEmail() {
  }
}
