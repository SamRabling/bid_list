import { Component, OnInit } from '@angular/core';
import { Locker, DRIVERS } from 'angular-safeguard';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  user;

  constructor(
    private locker: Locker,
    private route: ActivatedRoute,
    private _httpService: HttpService,
    private router: Router) { }

  ngOnInit() {
    const user = this.locker.get(DRIVERS.SESSION, 'user');
    if (!user) {
      this.router.navigate(['']);
    } else {
      this.user = user;
    }
  }

}
