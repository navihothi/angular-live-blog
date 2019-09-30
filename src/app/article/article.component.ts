import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  // templateUrl: './article.component.html',
  template: `
   <h3>article title</h3>
   <p *ngIf="author">{{ author }}</p>
   <p> {{ articleDate | date: 'short' }} </p>
   <div>BODY</div>
  `,
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  author = 'Michael B.';
  articleDate = new Date();

  constructor() {
  // dependency injection
   }

  ngOnInit() {
  // intializing the component
  }

}
