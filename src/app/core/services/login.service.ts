import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  loginUser(username, password): string {
    if (username === 'student' && password === 'password') {
      return 'Student';
    } else if (username === 'secretary' && password === 'password') {
      return 'Secretary';
    } else if (username === 'teacher' && password === 'password') {
      return 'Teacher';
    } else {
      return null;
    }
  }
}
