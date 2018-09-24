import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `<h1>asd</h1>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  username: string = '';
  serverCreationSatus: string = 'No server was created';
  serverName: string = 'testServer' ;
  serverCreated = false;
  servers = ['Test server 1', 'Server 2'];

  constructor() { 
    setTimeout(( ) => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {

  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationSatus = 'Server was created! name = ' + this.serverName;
  }

  onUpdateServer(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  clearUsernameInput(){
    this.username = '';
  }

}
