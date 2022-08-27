import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http : HttpClient
    
  ) { }

  saveData(obj:any){
    return this._http.post<any>("http://localhost:3000/api/user", obj);
  }
  getData(){
    let token = localStorage.getItem("token");
    let headers = new HttpHeaders({
      'Authorization' : `${token}`,
    });
    return this._http.get<any>("http://localhost:3000/api/user/profile", {
      headers : headers
    });
  }
}
