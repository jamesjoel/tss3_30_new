import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-to-child',
  templateUrl: './parent-to-child.component.html',
  styleUrls: ['./parent-to-child.component.css']
})
export class ParentToChildComponent implements OnInit {

  name = "Rohit";
  a:any;
  b:any=[];
  x:any;
  constructor() { }

  ngOnInit(): void {
  }

  demo(){
    this.b.push(this.a);
    this.a = "";
  }
  hello(a:any){
    // console.log(a);
    this.x = a;
  }

}
