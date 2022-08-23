import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  allCity:any;

  constructor(
    private _city : CityService
  ) { 

    this._city.getAllCity().subscribe(result=>{
      // console.log(result);
      this.allCity = result;
    })

  }

  ngOnInit(): void {
  }

}
