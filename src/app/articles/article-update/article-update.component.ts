import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { ArticleService } from '../articles.service';
import { Article } from '../articles.model';

@Component({
  selector: 'app-article-update',
  templateUrl: './article-update.component.html',
  styleUrls: ['./article-update.component.css']
})
export class ArticleUpdateComponent implements OnInit {

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  public id: string;
  public article: any[];
  public data: any[];

  updateArticleForm = new FormGroup({
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
    this.id = this.route.snapshot.paramMap.get('id');
    return this.getArticle(this.id);
  }

  getArticle(id) {
    this.articleService.getArticle(this.id).subscribe(
      (response) => {
        const data = response.json();
        this.article = data.data;
        this.updateArticleForm.patchValue({ title: this.article.title, content: this.article.content });
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    console.warn(this.updateArticleForm.value);
    this.updateNewArticle();
  }

  updateNewArticle() {
    const data = {id: this.id, data: this.updateArticleForm.value};
    this.articleService.updateArticle(data).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

}
