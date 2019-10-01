import { Component, OnInit } from '@angular/core';
import { FetchService, DataArticle } from '../fetch.service';

import { HttpResponse } from '@angular/common/http'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  selectedArticle: any;

  displaySelectedArticle(article: any) {
    this.selectedArticle = article;
    console.log(this.selectedArticle);
  }
  constructor(private fetchService: FetchService) {}

  ngOnInit() {
    this.fetchService.articles
      .subscribe((articles: DataArticle[]) => {
        if (articles.length) {
          this.selectedArticle = articles[0];
        }
      }, (error: Error) => {
        console.log('sad path', error);
      });

    if (this.fetchService.articles.length) {
      this.selectedArticle = this.fetchService.articles[0];
    }
  }

}
