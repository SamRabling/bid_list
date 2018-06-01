import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  register(userData) {
    return this._http.post('/newUser', userData);
  }

  login(userLog) {
    return this._http.post('/logIn', userLog);
  }

  showMeArt() {
    return this._http.get('/bids');
  }

  addUser(newUser) {
    return this._http.post('/bids/user', newUser);
  }

  oneArt(id: string) {
    return this._http.get(`/bids/art/${id}`);
  }

  wishlist(id: string, user) {
    return this._http.post(`/bids/interested/${id}`, user);
  }
}
