import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { copyStyles } from '@angular/animations/browser/src/util';
@Injectable()

export class ArticleService{
    constructor(private http: Http){}

    getArticles(){
        const headers = new Headers({
            'Content-Type': 'application/json',
            'api_token': environment.api_token
        });
        return this.http.get(environment.api_url + 'articles', {headers: headers});
    }

    getArticle(id) {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'api_token': environment.api_token
        });
        return this.http.get(environment.api_url + 'article/' + id, {headers: headers});
    }

    storeArticle(article){
        const headers = new Headers({
            'Content-Type': 'application/json',
            'api_token': environment.api_token
        });
        return this.http.post(environment.api_url + 'article/store', article, {headers: headers});
    }

    updateArticle(data){
        // console.log(data);
        const headers = new Headers({
            'Content-Type': 'application/json',
            'api_token': environment.api_token
        });

        return this.http.put(environment.api_url + 'article/update', data, {headers: headers});
    }
    deleteArticle(id){
        const headers = new Headers({
            'Content-Type': 'application/json',
            'api_token': environment.api_token
        });
        return this.http.delete(environment.api_url + 'article/delete', id, {headers: headers});
    }
}
