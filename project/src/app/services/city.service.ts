import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(
    private _http : HttpClient
  ) { }

  getAllCity(){
    //http://localhost:3000/api/city/pages/1/100
    return this._http.get<any>(environment.apiUrl+"city");
  }
  getPerPageCity(a:any, b: any){
    
    return this._http.get<any>(environment.apiUrl+"city/pages/"+a+"/"+b);
  }



  totalRec(){
    return this._http.get<any>(environment.apiUrl+"city/total_record");

  }
}
