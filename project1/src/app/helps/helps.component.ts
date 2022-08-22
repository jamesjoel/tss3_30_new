import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helps',
  templateUrl: './helps.component.html',
  styleUrls: ['./helps.component.css']
})

export class HelpsComponent implements OnInit {

  
  arr:string[] = [];

  name:string = "";
  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.arr.push(this.name);
    this.name = "";
  }

}
