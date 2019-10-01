import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent implements OnInit {
  // @Input() bringing in properties from the parent to the child component
  @Input() article: any;
  // @Output() we want to use in our parent component from the child
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
