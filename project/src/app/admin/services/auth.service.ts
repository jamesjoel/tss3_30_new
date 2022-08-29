import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http : HttpClient,
    private _router : Router
  ) { }

  do_login(obj:any){
    return this._http.post<any>("http://localhost:3000/api/admin/login", obj);
  }
  isLoggedIn(){
    if(localStorage.getItem("admintoken"))
      return true;
    else 
      return false;
  }
  logout(){
    localStorage.removeItem("admintoken");
    this._router.navigate(["/"]);
  }
}
