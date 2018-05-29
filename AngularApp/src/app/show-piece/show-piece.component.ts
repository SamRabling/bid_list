import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-show-piece',
  templateUrl: './show-piece.component.html',
  styleUrls: ['./show-piece.component.css']
})
export class ShowPieceComponent implements OnInit {
  showArt: {};
  id: any;
  art_params: any;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
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

