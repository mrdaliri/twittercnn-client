import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule, ClrFormsNextModule } from '@clr/angular';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { TweetComponent } from './tweet/tweet.component';
import { ContentComponent } from './content/content.component';
import { TweetPipe } from './tweet.pipe';
import { ArticleComponent } from './article/article.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    ContentComponent,
    TweetPipe,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ClarityModule,
    ClrFormsNextModule,
    MomentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
