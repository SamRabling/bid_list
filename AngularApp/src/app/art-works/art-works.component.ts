import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-art-works',
  templateUrl: './art-works.component.html',
  styleUrls: ['./art-works.component.css']
})
export class ArtWorksComponent implements OnInit {
  arts = [];
  id: any;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.allArt();
  }

  allArt() {
    const observable = this._httpService.showMeArt();
    observable.subscribe(data => {
      this.arts = data['data'];
      this.arts.sort(this.id);
    });
  }

  oneArt(id: string) {
    const obsevable = this._httpService.oneArt(id);
    obsevable.subscribe(data => {
      console.log(data);
    });
  }

}
