import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  serverId = 10;
  serverStatus = 'online';
  noSecret = false ;
  item = 'Item' ;
  items = [];
  a = 0;

  constructor() { 
    this.serverStatus = Math.random ()> 0.5 ? 'online': 'offine' ;
   }

  ngOnInit(): void { 
  }
  getServerStatus() {
   return this.serverStatus;
  }
  random(){
  }
  getColor() {
    return this.serverStatus = 'online' ? 'green': 'red';
  }
  getsecret() {
    this.noSecret =   this.noSecret===false ? true: false;
    this.items.push (this.a++ + '-'+this.noSecret);

    console.log(this.items);
    }
  getcolors() {
    console.log("hi")
   // this.item = this.a >= '5' ? 'blue' :'transparent';
  }  


}
