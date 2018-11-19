import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Tweet} from '../tweet';
import {ContentService} from '../content.service';
import {Article} from '../article';
import {forkJoin} from 'rxjs';

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

  content: (Tweet | Article)[] = [];
  timer;

  constructor(private api: ContentService) {
  }

  ngOnInit() {
    this.update();
    this.timer = setInterval(() => {
      this.update();
    }, 60 * 1000);
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  update() {
    forkJoin([
      this.api.tweets(this.username, this.count),
      this.api.news(this.keyword, this.count)
    ])
      .subscribe(result => {
        let merged: (Tweet | Article)[] = [...result[0], ...result[1]];
        merged.sort(function (a, b) {
          return b.datetime - a.datetime;
        });

        this.content = merged;
      });
  }

  isTweet(c): boolean {
    return c.hasOwnProperty('id');
  }
}
