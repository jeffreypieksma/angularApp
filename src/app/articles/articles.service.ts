import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()

export class ArticleService{
    constructor(private http: Http){}

    storeArticles(articles: any[]){
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post('http://localhost/api/article', articles, {headers: headers});
    }
    getArticles(){
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.get('http://localhost/api/articles', {headers: headers});
    }
}
