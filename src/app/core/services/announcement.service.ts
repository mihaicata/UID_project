import { Injectable } from '@angular/core';
import {Announcement} from '../models/announcement';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor() { }

  initAnnouncements() {
    const announcements: Announcement[] = [];
    const announce1 = new Announcement();
    const announce2 = new Announcement();
    announce1.title = 'One Bonus Point In Exam';
    announce1.shortDescription = 'Everyone who took part in at least 5 courses will get one bonus point';
    announce1.likes = 300;

    announce2.title = 'One Absence at Laboratory';
    announce2.shortDescription = 'If you have at least 1 absence at the laboratory, you cannot take the exam';
    announce2.likes = 0;
    announcements.push(announce1);
    announcements.push(announce2);
    return announcements;
  }
}
