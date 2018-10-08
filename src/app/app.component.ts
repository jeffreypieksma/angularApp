import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
    h1{color:green;
    }
  `]
})

export class AppComponent {   

  title = 'angularApp';
  name = 'My name is jeff';
  showPara = true;  
  eventsArray = [];   
  counter = 1;    
  
  togglePara(event: Event) {       
    this.showPara = !this.showPara;       
    this.eventsArray.push(event.type);    
  }
}
