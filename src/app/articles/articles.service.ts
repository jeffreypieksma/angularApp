import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { AuthService } from './../auth.service';

@Injectable()

export class ArticleService{
    constructor(private http: Http){}

    headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('api_token')
    });

    getArticles() {
        return this.http.get(environment.api_url + 'articles', {headers: this.headers});
    }

    getArticle(id) {
        return this.http.get(environment.api_url + 'article/' + id, {headers: this.headers});
    }

    storeArticle(article) {
        return this.http.post(environment.api_url + 'article/store', article, {headers: this.headers});
    }

    updateArticle(data) {
        return this.http.put(environment.api_url + 'article/update', data, {headers: this.headers});
    }
    deleteArticle(id) {
       // return this.http.delete(environment.api_url + 'article/delete/{id}', data, {headers: this.headers});
    }
}
