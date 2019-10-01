import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

export interface DataArticle {
  author: string;
  body: string;
  isPublished: boolean;
  date: number[];
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class FetchService {
// http://angular-connect.rangleu.io/blogs
  articles = this.http.get('http://angular-connect.rangleu.io/blogs');

  constructor(private http: HttpClient) {}
}
