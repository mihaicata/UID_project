import { Injectable } from '@angular/core';
import {Course} from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class LecturesService {

  constructor() { }

  initFA() {
    const lectures: string[] = [];
    lectures.push('Direct Sorting Methods');
    lectures.push('Heap Sorting');
    lectures.push('Merge K Sorted Lists');
    lectures.push('Hash Tables');
    return lectures;
  }

  initUID() {
    const lectures: string[] = [];
    lectures.push('UID Concepts');
    lectures.push('IO Concepts');
    lectures.push('Design');
    lectures.push('UID Methodology');
    return lectures;
  }
}
