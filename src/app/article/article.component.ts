import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  @Input() article: Article;
  compactView: boolean = true;

  constructor() {
  }

  toggleView() {
    this.compactView = !this.compactView;
  }
}
