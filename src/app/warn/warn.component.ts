import { Component } from '@angular/core';

@Component({
    selector: 'app-warn',
    templateUrl: './warn.component.html',
    styleUrls: ['./warn.component.css']
})
export class WarnComponent {
    ServerId = 10 ;
    ServerStatus = true ;
    AllowNewServer = false ;
    serverCreationStatus = 'no server created';
    serverName ='TEST server';
    userName = '';
    notEmpty = true ;
    serverCreated = false;
    servers =['Test server', 'Test server2']

  constructor() {
      setTimeout(() => {
          this.AllowNewServer = true;
      },5000 );
  }
  ngOnInit(): void {
    
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server created!'+ this.serverName;
  }
  onUpdateServerName(event:Event) {
      this.serverName = (<HTMLInputElement> event.target).value ;

  }

  buttonClicked() {
      this.userName = "";
      this.notEmpty = true;
  }
  disableButton(event:Event) {
      if ((<HTMLInputElement> event.target).value.length > 0) {
        this.notEmpty = false;
      }
  }
}
