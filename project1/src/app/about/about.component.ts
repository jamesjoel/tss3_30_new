import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  stu:any=[];
  constructor(
    private _http : HttpClient
  ){
    this._http.get<any>("http://localhost:3000/student").subscribe(result=>{
      this.stu = result;
    })
  }
}
