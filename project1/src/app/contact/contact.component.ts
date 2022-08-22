import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  x = "Show";
  

  color = "blue";
  h = 200;
  w = 200;
  constructor() { }

  ngOnInit(): void {
  }


  demo1(){
    this.color = "green";
  }
  demo2(){
    this.h++;
    this.w++;
  }
  demo3(){
    this.color = "blue";
  }

  demo10(){
    // if(this.show == true){
    //   this.show = false;
    // }else{
    //   this.show = true;
    // }

    // this.show = this.show == true ? false : true;

    this.x = this.x=="Show" ? "Hide" : "Show";
  }
 
}
