import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private _http : HttpClient
  ) { }

  do_upload(obj:any){
    return this._http.post<any>("http://localhost:3000/api/image/upload", obj);
  }

  getAll(){
    return this._http.get<any>("http://localhost:3000/api/image/upload");
  }
}
