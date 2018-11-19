import { Component, Input } from '@angular/core';
import { Tweet } from '../tweet';
import { Tone } from '../tone';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent {
  @Input() tweet: Tweet;

  constructor(private api: ContentService) {}

  hasPhoto(tweet: Tweet) {
    if (tweet.entities.media
        && tweet.entities.media.length
        && tweet.entities.media[0].type === 'photo') {
      return true;
    }
    return false;
  }

  findEmotion(tweet: Tweet): Tone {
    if (!tweet.tones) {
      return {tone_id: 'neutral', tone_name: 'Neutral', score: 1};
    }

    tweet.tones.sort(function (a, b) {
      return b.score - a.score;
    });

    return tweet.tones[0];
  }

  emotionToImage(tweet: Tweet): string {
    return this.api.emotion(this.findEmotion(tweet).tone_id, tweet.id_str);
  }
}
