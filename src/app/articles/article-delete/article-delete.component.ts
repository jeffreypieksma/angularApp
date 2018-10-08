import { Component, OnInit } from '@angular/core';

import { ArticleService } from '../articles.service';
import { Article } from '../articles.model';

@Component({
  selector: 'app-article-delete',
  templateUrl: './article-delete.component.html',
  styleUrls: ['./article-delete.component.css']
})
export class ArticleDeleteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
