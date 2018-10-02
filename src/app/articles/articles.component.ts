import { Component, OnInit } from '@angular/core';
import { ArticleService } from './articles.service';
import { Article } from './articles.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articleName: string;
  articleContent: string;

  constructor(private articleService: ArticleService) { }

  articles = [
    {
      title: 'Article 1',
      content: 'content 2'
    }
  ];

  onCreateArticle(articleName, articleContent){
    this.articles.push({
        title: articleName,
        content: articleContent,
    });
  }

  storeArticles(){
    this.articleService.storeArticles(this.articles).subscribe(
      (response)=> console.log(response),
      (error) => console.log(error)
    );
  }

  getArticles(){
    this.articleService.getArticles().subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  ngOnInit() {
  }

}
