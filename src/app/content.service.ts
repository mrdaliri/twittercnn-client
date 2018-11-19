import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Tweet } from './tweet';
import { Article } from './article';

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) { }

  tweets(user: string, count: number) {
    return this.http.get<Tweet[]>(`${environment.api}/tweets/${user}/?count=${count}`);
  }

  emotion(emotion: string, random: string) {
    return `${environment.api}/visualize/${emotion}?${random}`;
  }

  news(keyword: string, count: number) {
    return this.http.get<Article[]>(`${environment.api}/news/?keyword=${keyword}&count=${count}`);
  }
}
