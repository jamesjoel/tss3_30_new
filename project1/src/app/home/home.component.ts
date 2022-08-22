import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  name:string = "rohit";
  a:string=""; // property

  demo1(){
    let a = "nilesh";
    this.a = a;
    this.name = "amar";
    console.log("--------------");
  }

  demo2(){
    console.log("hello");
  }
  demo3(){
    console.log("***********");
    return false;
  }

}
