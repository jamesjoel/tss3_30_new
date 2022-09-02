import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-box',
  templateUrl: './child-box.component.html',
  styleUrls: ['./child-box.component.css']
})
export class ChildBoxComponent implements OnInit {

  @Input() x:any;
  @Input() y:any;
  @Output() myEvent = new EventEmitter;


  constructor() { }

  ngOnInit(): void {
  }
  remove(x:any){
    let n = this.y.indexOf(x);
    this.y.splice(n, 1);
  }

  demo(){
    this.myEvent.emit("jaya patidar");
  }

}
