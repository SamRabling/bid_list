import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { Locker, DRIVERS } from 'angular-safeguard';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errors: string;
  userInfo = { firstName: '', lastName: '', email: '', password: ''};
  loginInfo = { email: '', password: '' };

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private locker: Locker) { }

  ngOnInit() {
  }

  registerUser() {
    this._httpService.register(this.userInfo).subscribe(data => {
      if (data['status'] === false ) {
        this.errors = data['error']['message'];
        console.log('failed');
      } else {
        this.locker.set(DRIVERS.SESSION, 'user', data['data']);
        console.log('success');
        this._router.navigate(['home']);
        console.log('routed home');
      }
    });
  }

  loginUser() {
    this._httpService.login(this.loginInfo).subscribe(data => {
      if (data['status'] === false) {
        this.errors = data['error']['message'];
      } else {
        if (!data['data']) {
          this.errors = 'You dont have an account! Please register.';
        } else {
          this.locker.set(DRIVERS.SESSION, 'user', data['data']);
          this._router.navigate(['home']);
        }
      }
    });
  }
}
