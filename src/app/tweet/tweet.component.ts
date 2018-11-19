import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Tweet } from '../tweet';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent {
  @Input() tweet: Tweet;
  @Input() retweet: Tweet;

  hasPhoto(tweet: Tweet) {
    if (tweet.entities.media
        && tweet.entities.media.length
        && tweet.entities.media[0].type === 'photo') {
      return true;
    }
    return false;
  }

}
