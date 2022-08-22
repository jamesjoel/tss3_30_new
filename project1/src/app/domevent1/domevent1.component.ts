import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-domevent1',
  templateUrl: './domevent1.component.html',
  styleUrls: ['./domevent1.component.css']
})
export class Domevent1Component implements OnInit {

  color  = "white";
  constructor() { }

  ngOnInit(): void {
  }

  demo1(){
    console.log("-----------");
    // return false;
  }
  demo2(){
    console.log("**********");
    return false;
    // rohit
  }
  demo3(){
    this.color = "red";
    console.log("$$$$$$$$$$$$$");
  }
  demo4(){
    this.color = "white";
  }
  demo5(){
    console.log("^^^^^^^^^^^^^^");
  }
  demo6(){
    console.log("##############");
  }
  demo7(){
    console.log("@@@@@@@@@@@@");
  }

}
