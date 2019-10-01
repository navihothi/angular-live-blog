import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';

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
    if (this.fetchService.articles.length) {
      this.selectedArticle = this.fetchService.articles[0];
    }
  }

}
