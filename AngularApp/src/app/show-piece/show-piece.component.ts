import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { Locker, DRIVERS } from 'angular-safeguard';


@Component({
  selector: 'app-show-piece',
  templateUrl: './show-piece.component.html',
  styleUrls: ['./show-piece.component.css']
})
export class ShowPieceComponent implements OnInit {
  showArt: {};
  id: any;
  art_params: any;
  user;

  constructor(
    private locker: Locker,
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    const user = this.locker.get(DRIVERS.SESSION, 'user');
    if (!user) {
      this._router.navigate(['']);
    } else {
      this.user = user;
    }
    this.art_params = this._route.params.subscribe(params => {
    this.id = params.id;
    this.oneArt(this.id);
    });
    this.showArt = { title: '', artist: '', medium: '', img: '', interested: '' };
  }

  oneArt(id: string) {
    const obsevable = this._httpService.oneArt(id);
    obsevable.subscribe(data => {
      console.log(data);
      this.showArt = data['data'];
      console.log(this.showArt);
    });
  }

}

