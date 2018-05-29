import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  showMeArt() {
    return this._http.get('/bids');
  }

  addUser(newUser) {
    return this._http.post('/bids/user', newUser);
  }

  editUser(id: string, updatedUser) {
    return this._http.post(`/bids/user/${id}`, updatedUser);
  }

  oneArt(id: string) {
    return this._http.get(`/bids/art/${id}`);
  }

  oneUser(id: string) {
    return this._http.get(`/bids/user/${id}`);
  }

  deleteProduct(id: string, destroyedProd) {
    return this._http.post(`/products/remove/${id}`, destroyedProd);
  }
}
