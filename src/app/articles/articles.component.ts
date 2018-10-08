import { Component, OnInit } from '@angular/core';
import { ArticleService } from './articles.service';
import { Article } from './articles.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  animations: []
})
export class ArticlesComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  title = 'Article list';

  articleTitle: string;
  articleContent: string;
  submitted = false;
  articles: any[];

  ngOnInit() {
    return this.getArticles();
  }

  getArticles() {
    this.articleService.getArticles().subscribe(
      (response) => {
        const articles = response.json();
        this.articles = articles.data;
        console.log(this.articles);
      },
      (error) => console.log(error)
    );
  }

}