import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
