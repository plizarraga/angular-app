import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';

import { Post } from '../models/Post'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class PostService {
  postUrl: string = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  getAllPosts (): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl);
  }

  getPost (id: number): Observable<Post> {
    return this.http.get<Post>(`${this.postUrl}/${id}`);
  }

  createPost (post: Post): Observable<Post> {
    return this.http.post<Post>(this.postUrl, post, httpOptions);
  }

  updatePost (post: Post): Observable<Post> {
    console.log(post)
    return this.http.put<Post>(`${this.postUrl}/${post.id}`, post, httpOptions);
  }

  deletePost (id: number): Observable<Post> {
    return this.http.delete<Post>(`${this.postUrl}/${id}`, httpOptions);
  }

}
