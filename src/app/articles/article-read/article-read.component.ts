import { Component, OnInit } from '@angular/core';

import { ArticleService } from '../articles.service';
import { Article } from '../articles.model';

import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article-read',
  templateUrl: './article-read.component.html',
  styleUrls: ['./article-read.component.css']
})
export class ArticleReadComponent implements OnInit {

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  article: any[];
  id: '';

  ngOnInit() {
    this.setArticleId();
    return this.getArticle();
  }

  setArticleId(){
    this.id = this.route.snapshot.params['id'];
  }

  getArticle() {

    this.articleService.getArticle(this.id).subscribe(
      (response) => {
        const articles = response.json();
        this.article = articles.data;
      },
      (error) => console.log(error)
    );
  }

}
