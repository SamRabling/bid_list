import { Component, OnInit } from '@angular/core';
import { Locker, DRIVERS } from 'angular-safeguard';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  user;

  constructor(
    private locker: Locker,
    private _router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit() {
    const user = this.locker.get(DRIVERS.SESSION, 'user');
    if (!user) {
      this._router.navigate(['']);
    } else {
      this.user = user;
    }
  }

  logout() {
  this.locker.clear(DRIVERS.SESSION);
  console.log('session cleared');
  this._router.navigate(['']);
  }
}
