import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { ArticleService } from '../articles.service';
import { Article } from '../articles.model';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  createArticleForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    content: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])
  });

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.createArticleForm.value);
    this.storeNewArticle(this.createArticleForm.value);
  }

  storeNewArticle(article){
    this.articleService.storeArticle(article).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }


  // createNewArticle(article){
  //   this.articles.push({
  //     title: title,
  //     content: content,
  //   });
  // }



}
