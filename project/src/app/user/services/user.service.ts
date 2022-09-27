import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http : HttpClient
    
  ) { }

  saveData(obj:any){
    return this._http.post<any>(environment.apiUrl+"user", obj);
  }
  getData(){
    let token = localStorage.getItem("token");
    let headers = new HttpHeaders({
      'Authorization' : `${token}`,
    });
    return this._http.get<any>(environment.apiUrl+"user/profile", {
      headers : headers
    });
  }
}
