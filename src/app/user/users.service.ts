import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as myGlobals from '../globals';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  activeUser;
  constructor(private http: Http) {

  }

  getUsers(apiRoot): Observable<any> {
    const apiURL = `${myGlobals.apihost}${apiRoot}`;
    return this.http.get(apiURL);
  }

  setActiveUser(user){
    return this.activeUser = user;
  }

  createUser(apiRoot, body): Observable<any> {
    const apiURL = `${myGlobals.apihost}${apiRoot}`;
    return this.http.post(apiURL, body);
  }

  editUser(apiRoot, body): Observable<any> {
    const apiURL = `${myGlobals.apihost}${apiRoot}`;
    return this.http.put(apiURL, body);
  }

  deleteUser(apiRoot): Observable<any> {
    const apiURL = `${myGlobals.apihost}${apiRoot}`;
    return this.http.delete(apiURL);
  }

}
