import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-blog-roll',
    templateUrl: './blog-roll.component.html',
    styleUrls: ['./blog-roll.component.scss']
})

export class BlogRollComponent implements OnInit {
    @Input() articles: any;
    @Output() selectedArticle = new EventEmitter

    sayHello(article: any) {
        console.log(article);
    }

    constructor() {}
    ngOnInit() {}
}