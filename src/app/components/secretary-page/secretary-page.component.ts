import {Component, OnInit} from '@angular/core';
import {Student} from '../../core/models/student';
import {ActivatedRoute, Router} from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-secretary-page',
  templateUrl: './secretary-page.component.html',
  styleUrls: ['./secretary-page.component.css']
})

export class SecretaryPageComponent implements OnInit {
  viewAnnouncements: boolean;
  viewStudents: boolean;
  file: File;
  viewChat: boolean;
  viewChatWindow: boolean;
  viewEmails: boolean;
  viewComposeEmail: boolean;
  friendName: string;
  messageValue = '';
  uploadFileName = '';
  announcementTitle = '';
  announcementsDummies = ['Erasmus scholarships coming soon', 'Accomodation in Observartor campus', 'BOSCH internship offers'];
  destMessages: string[] = ['Hello!', 'How are you doing?'];
  myMessages: string[] = [];
  friends: string[] = ['Mihai Cata', 'Vlad Petrutiu', 'Moldovan Alexandra', 'Paul Helmer'];
  emails = [{name: 'Potolea Rodica', topic: 'Department meeting at 16'}, {name: 'Fried Johanna', topic: 'Student complaints'}];
  // MIHAI
  displayedColumns: string[] = ['firstName', 'lastName', 'country', 'group', 'university', 'faculty'];
  dataSource = ELEMENT_DATA;

  students: Student[] = [];
  IsVisible = false;
  student1: Student;
  student2: Student;
  student3: Student;
  student4: Student;
  student5: Student;
  student6: Student;
  levelNum: number;
  levels: Array<object> = [
    {num: 0, name: 'View students enrolled in current year'},
    {num: 1, name: 'View students having failed exams'},
    {num: 2, name: 'View students having a scholarship'},
    {num: 3, name: 'View Erasmus students'},
    {num: 4, name: 'View students studying abroad'}
  ];
  selectedValue: string;
  private selected: ({ name: string; topic: string } | { name: string; topic: string })[];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.student1 = new Student();
    this.student1.country = 'Romania';
    this.student1.faculty = 'Electrical Engineering';
    this.student1.firstname = 'Radu';
    this.student1.lastname = 'Paraschivescu';
    this.student1.group = 40122;
    this.student1.university = 'UTCN';

    this.student2 = new Student();
    this.student2.country = 'Spain';
    this.student2.faculty = 'Computer Science';
    this.student2.firstname = 'Eduardo';
    this.student2.lastname = 'Gonzalez';
    this.student2.group = 40122;
    this.student2.university = 'University of Madrid';

    this.student3 = new Student();
    this.student3.country = 'Romania';
    this.student3.faculty = 'Mechanics';
    this.student3.firstname = 'Ioana';
    this.student3.lastname = 'Achimescu';
    this.student3.group = 40314;
    this.student3.university = 'UTCN';

    this.student4 = new Student();
    this.student4.country = 'Romania';
    this.student4.faculty = 'Architecture';
    this.student4.firstname = 'Maria';
    this.student4.lastname = 'Vadim';
    this.student4.group = 40111;
    this.student4.university = 'UTCN';

    this.student5 = new Student();
    this.student5.country = 'Romania';
    this.student5.faculty = 'Environmental Engineering';
    this.student5.firstname = 'Paul';
    this.student5.lastname = 'Tudose';
    this.student5.group = 40235;
    this.student5.university = 'UTCN';

    this.student6 = new Student();
    this.student6.country = 'Romania';
    this.student6.faculty = 'Medical Engineering';
    this.student6.firstname = 'Amalia';
    this.student6.lastname = 'Roata';
    this.student6.group = 40735;
    this.student6.university = 'UTCN';
  }

  ngOnInit() {
    this.viewAnnouncements = false;
    this.viewChat = false;
    this.viewChatWindow = false;
    this.viewStudents = false;
    this.viewEmails = false;
    this.viewComposeEmail = false;
  }


  sendMessage(chatMessage: boolean, message: string) {
    if (chatMessage) {
      this.myMessages.push(message);
      this.messageValue = '';
    }
  }
  seeAnnouncements() {
    this.viewAnnouncements = this.viewAnnouncements !== true;
    this.viewChat = false;
    this.viewChatWindow = false;
    this.viewStudents = false;
    this.viewEmails = false;
    this.viewComposeEmail = false;
  }

  seeChatWindow(friendName: string) {
    this.viewChatWindow = this.viewChatWindow !== true;
    this.viewStudents = false;
    this.friendName = friendName;
    console.log(friendName);
  }

  fileChange(file) {
    this.file = file.target.files[0];
    this.messageValue = this.file.name;
  }

  fileChangeAnnouncement(file) {
    this.file = file.target.files[0];
    this.uploadFileName = this.file.name;
  }

  seeChat() {
    this.viewChat = this.viewChat !== true;
    this.viewAnnouncements = false;
    this.viewChatWindow = false;
    this.viewStudents = false;
    this.viewEmails = false;
    this.viewComposeEmail = false;
  }

  // MIHAI
  toNumber() {
    this.levelNum = +this.levelNum;
    console.log(this.levelNum);
  }

  public showTable() {
    this.students = [];
    console.log(this.levelNum);
    if (this.levelNum === 0) {
      this.students.push(this.student1);
      this.students.push(this.student2);
      this.students.push(this.student3);
      this.students.push(this.student4);
      this.students.push(this.student5);
      this.students.push(this.student6);
    }
    if (this.levelNum === 1) {
      this.students.push(this.student3);
    }
    if (this.levelNum === 2) {
      this.students.push(this.student4);
      this.students.push(this.student5);
    }
    if (this.levelNum === 3) {
      this.students.push(this.student2);
    }
    if (this.levelNum === 4) {
      this.students.push(this.student4);
    }

  }

  seeEnrolledStudents() {
    this.viewStudents = this.viewStudents !== true;
    this.viewAnnouncements = false;
    this.viewChat = false;
    this.viewChatWindow = false;
    this.viewEmails = false;
    this.viewComposeEmail = false;
  }

  // ----------------------------------------PAUL------------------------------------------
  seeEmails() {
    this.viewEmails = this.viewEmails !== true;
    this.selected = this.emails;
    this.viewChat = false;
    this.viewChatWindow = false;
    this.viewAnnouncements = false;
    this.viewStudents = false;
  }

  composeEmail() {
    this.viewComposeEmail = this.viewComposeEmail !== true;
    this.viewChat = false;
    this.viewChatWindow = false;
    this.viewAnnouncements = false;
    this.viewStudents = false;
  }

  sendEmail() {
  }
}
