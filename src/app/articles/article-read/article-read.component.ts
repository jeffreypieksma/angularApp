import { Component, OnInit } from '@angular/core';

import { ArticleService } from '../articles.service';
import { Article } from '../articles.model';

@Component({
  selector: 'app-article-read',
  templateUrl: './article-read.component.html',
  styleUrls: ['./article-read.component.css']
})
export class ArticleReadComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  article: any[];
  id = 2;

  ngOnInit() {
    return this.getArticle();
  }

  getArticle() {
    this.articleService.getArticle(this.id).subscribe(
      (response) => {
        const articles = response.json();
        this.article = articles.data;
        console.log(this.article);
      },
      (error) => console.log(error)
    );
  }

}
