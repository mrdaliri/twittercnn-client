import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Tweet } from '../tweet';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit, OnDestroy {
  tweets: Tweet[] = [];
  @Input() username: string;
  count = 25;
  timer;

  constructor(private api: ContentService) {}

  ngOnInit() {
    this.getTweets();
    this.timer = setInterval(() => this.getTweets(), 61000);
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

}
