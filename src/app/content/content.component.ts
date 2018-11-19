import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Tweet } from '../tweet';
import { ContentService } from '../content.service';
import {Article} from '../article';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnDestroy {
  tweets: Tweet[] = [];
  news: Article[] = [];
  @Input() username: string;
  @Input() keyword: string;
  count = 25;
  timer;

  constructor(private api: ContentService) {}

  ngOnInit() {
    // this.getTweets();
    this.getNews();
    this.timer = setInterval(() => {
      this.getTweets();
      this.getNews();
    }, 61000);
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  getTweets() {
    this.api.tweets(this.username, this.count).subscribe(tweets => {
      this.tweets = tweets;
    });
  }

  getNews() {
    this.api.news(this.keyword, this.count).subscribe(news => {
      this.news = news;
    });
  }
}
