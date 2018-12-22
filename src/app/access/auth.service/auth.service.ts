import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { apihost } from './../../globals';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private LoggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false')


  constructor(private http: Http) { }

  setLoggedIn(value: boolean) {
    this.LoggedInStatus = value;
  }

  get isLoggedIn() {
    return JSON.parse(localStorage.getItem('loggedIn') || this.LoggedInStatus.toString());
  }

  // post login details to server
  getLoginDetails(phone, password) {
    const url = `${apihost}user/login`;
    return this.http.post(url, {
      phone: phone,
      password: password
    })
  }

}
