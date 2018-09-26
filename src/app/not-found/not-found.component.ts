import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  //templateUrl: './not-found.component.html',
  template: `<h2>Page not found</h2>`,
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
