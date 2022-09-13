import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  allCity:any;
  totalRec:any;
  recPerPage = 200;
  totalPages:any;
  currentPage = 1;
  counter=0;

  constructor(
    private _city : CityService
  ) { 

    this._city.getPerPageCity(this.currentPage, this.recPerPage).subscribe(result=>{
      // console.log(result);
      this.allCity = result;
    });

    this._city.totalRec().subscribe(result=>{
      // console.log(result);
      this.totalRec = result.total;

      this.totalPages = Math.ceil(this.totalRec/this.recPerPage);
    })

  }

  ngOnInit(): void {
  }


  pagination(a:any){
    this.counter = (a-1)*this.recPerPage;
    this.currentPage = a;
    this._city.getPerPageCity(this.currentPage, this.recPerPage).subscribe(result=>{
      // console.log(result);
      this.allCity = result;
    });
  }

  demo(){
    console.log("----------");
  }
}
