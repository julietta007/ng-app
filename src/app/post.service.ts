import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Post } from './post';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PostService {

  //Set up the URL
  private url: string = 'http://localhost:4200/user/posts';

  //Call the HttpClient in the Constructor
  constructor(private http: HttpClient) { }

  //Set up a simple observable.
  getPosts(): Observable<Post> {
    return this.http.get<Post>(this.url);
  }
  getPost(id: string): Observable<Post> {
    return this.http.get<Post>(this.url + `/view/${id}`);
  }
  createPost (post: Post): Observable<Post> {
   return this.http.post<Post>(this.url + '/create', post, httpOptions);
 }
 editPost (post: Post): Observable<Post> {
  return this.http.post<Post>(this.url + '/edit', post, httpOptions);
 }
 deletePost (id: string): Observable<Post> {
  return this.http.get<Post>(this.url + `/delete/${id}`);
 }
}
