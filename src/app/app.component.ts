import { Component , OnInit} from '@angular/core';
import { ContentService } from './content.service';
import { Tweet } from './tweet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ContentService]
})
export class AppComponent {
  username = 'realDonaldTrump';

  constructor(private api: ContentService) {}

}
