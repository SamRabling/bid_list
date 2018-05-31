import { Component, OnInit } from '@angular/core';
import { Locker, DRIVERS } from 'angular-safeguard';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user;

  constructor(
    private locker: Locker,
    private route: ActivatedRoute,
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

