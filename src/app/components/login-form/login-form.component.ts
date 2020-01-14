import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginCredentials} from '../../core/models/login-credentials';
import {LoginService} from '../../core/services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group
    ({
      username: new FormControl('', [Validators.required]),
      password: new FormControl( '', [Validators.required])
    });
  }

  loginSubmit() {
    const credentials = new LoginCredentials();
    credentials.username = this.form.get('username').value;
    credentials.password = this.form.get('password').value;
    const role =  this.loginService.loginUser(credentials.username, credentials.password);
    if (role === 'Student') {
      this.router.navigateByUrl(role);
    } else if (role === 'Secretary') {
      this.router.navigateByUrl(role);
    }
      // localStorage.setItem('user', JSON.stringify(users));
      // console.log(localStorage.getItem('user'));
      // this.router.navigateByUrl(users.role.toLocaleLowerCase());
  }


}
