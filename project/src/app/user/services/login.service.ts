import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _http : HttpClient
  ) { }

  do_login(obj:any){
    return this._http.post<any>("http://localhost:3000/api/login", obj);
  }
}
