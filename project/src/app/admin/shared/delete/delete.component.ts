import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input() delItem:any;
  @Output() delEvent = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

  confirmDelete(btn:any){
    this.delEvent.emit(btn);
  }

}
