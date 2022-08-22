import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent implements OnInit {

  allData:any;
  dataComming = false;


  constructor(
    private _http : HttpClient
  ) { }

  ngOnInit(): void {
  }

  demo(){
    this.dataComming = true;
    this._http.get("https://jsonplaceholder.typicode.com/photos").subscribe(data=>{
      // console.log(data);
      this.allData = data;
      this.dataComming = false;
    })
  }

}
