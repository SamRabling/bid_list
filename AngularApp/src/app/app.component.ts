import { Component } from '@angular/core';
import { Locker, DRIVERS } from 'angular-safeguard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private locker: Locker) { }

  logout() {
  this.locker.clear(DRIVERS.SESSION);
  console.log('session cleared');
  }
}
