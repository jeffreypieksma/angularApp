import { Component, OnInit } from '@angular/core';
import { ArticleService } from './articles.service';
import { environment } from '../../environments/environment';
import { Article } from './articles.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  animations: []
})
export class ArticlesComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  title: 'Article list';
  articleTitle: string;
  articleContent: string;
  submitted = false;
  articles: any[];

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {

    if (environment.caching === false) {
      return this.getArticlesFromDatabase();
    }

    if ( 'articles' in localStorage) {
      const articles = this.getArticlesFromStorage('articles');
      const expiry_date = articles.expiry_date;

      if ( this.checkIfCacheIsExpired(expiry_date) === false ) {
        this.getArticlesFromDatabase();
      } else {
        this.articles = articles.data;
      }

    } else {
      this.getArticlesFromDatabase();

    }

  }

  getArticlesFromDatabase() {
    this.articleService.getArticles().subscribe(
      (response) => {
        //console.log(response.json());
        const articles = response.json();
        this.articles = articles;
        this.storeArticlesInStorage(articles);
      },
      (error) => console.log(error)
    );
  }

  storeArticlesInStorage(articles) {
    const currentDateTime = new Date().getTime();

    const now = new Date();
    const expiry_date = now.setMinutes(now.getMinutes() + 30);
    const object = { data: articles, timestamp: currentDateTime, expiry_date: expiry_date  };

    localStorage.setItem('articles', JSON.stringify(object));

    //console.log(JSON.parse(localStorage.getItem('articles'));
  }

  getArticlesFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));

    // const object = JSON.parse(localStorage.getItem(key));
    // const expiry_date = object.expiry_date;
    // return this.checkIfCacheIsExpired(expiry_date);
  }

  checkIfCacheIsExpired(expiry_date) {
    const now = new Date();
    const expires = new Date(expiry_date);

    console.log('now: ' + now);
    console.log('expires at: ' + expires);

    if ( expires.getTime() > now.getTime()  ) {
      console.log('cache not expired');
      return true;
    } else {
      console.log('cache expired');
      return false;
    }
  }
}