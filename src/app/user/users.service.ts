import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as myGlobals from '../globals';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: Http) {

  }

  getUsers(apiRoot): Observable<any> {
    const apiURL = `${myGlobals.apihost}${apiRoot}`;
    return this.http.get(apiURL);
  }
}
