import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { BlogRollComponent } from './blog-roll/blog-roll.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    BlogRollComponent,
    ArticleItemComponent,
    NewArticleComponent,
    HomePageComponent
  ],
  imports: [ //
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
