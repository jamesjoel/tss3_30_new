import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AntiBackdoorGuard implements CanActivate {
  constructor(
    private _router : Router,
    private _auth : AuthService
  ){ }


  canActivate() {
    if(this._auth.isLoggedIn()){
      this._router.navigate(["/admin/dash"]);
      return false;
    }else{
      return true;
    }
  }
  
}
