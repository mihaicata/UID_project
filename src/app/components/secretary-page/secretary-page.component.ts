import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-secretary-page',
  templateUrl: './secretary-page.component.html',
  styleUrls: ['./secretary-page.component.css']
})

export class SecretaryPageComponent implements OnInit {
  viewAnnouncements: boolean;
  file: File;
  viewChat: boolean;
  viewChatWindow: boolean;
  friendName: string;
  messageValue = '';
  uploadFileName = '';
  announcementTitle = '';
  announcementsDummies = ['Erasmus scholarships coming soon', 'Accomodation in Observartor campus', 'BOSCH internship offers'];
  destMessages: string[] = ['Hello!', 'How are you doing?'];
  myMessages: string[] = [];
  friends: string[] = ['Mihai Cata', 'Vlad Petrutiu', 'Moldovan Alexandra', 'Paul Helmer'];

  constructor() { }

  ngOnInit() {
    this.viewAnnouncements = false;
    this.viewChat = false;
    this.viewChatWindow = false;
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
  }

  seeChatWindow(friendName: string) {
    this.viewChatWindow = this.viewChatWindow !== true;
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
  }
}
