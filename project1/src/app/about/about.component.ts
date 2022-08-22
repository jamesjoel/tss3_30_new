import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  x= 10;
  l = 0;
  t = 0;

  arr = ["red", "green", "blue", "yellow", "pink"];

  user = [
    {
      name : "rohit",
      age : 25,
      city : "mumbai"
    },
    {
      name : "jaya",
      age : 23,
      city : "indore"
    },
    {
      name : "amar",
      age : 27,
      city : "pune"
    }
  ]



  demo(){
    let a = Math.random() * 800;
    let b = Math.floor(a);
    
    let x = Math.random() * 600;
    let y = Math.floor(x);

    this.l = b;
    this.t = y;
    
  }
  
  
}
