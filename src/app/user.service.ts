import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { User } from './user';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  //Set up the URL
  private url: string = 'http://localhost:3000/api/users';

  //Call the HttpClient in the Constructor
  constructor(private http: HttpClient) { }

  //Set up a simple observable.
  getUsers(): Observable<User> {
    return this.http.get<User>(this.url);
  }
  getUser(id: string): Observable<User> {
    return this.http.get<User>(this.url + `/view/${id}`);
  }
  createUser (user: User): Observable<User> {
   return this.http.post<User>(this.url + '/create', user, httpOptions);
 }
 editUser (user: User): Observable<User> {
  return this.http.post<User>(this.url + '/edit', user, httpOptions);
 }
 deleteUser (id: string): Observable<User> {
  return this.http.get<User>(this.url + `/delete/${id}`);
 }
}
