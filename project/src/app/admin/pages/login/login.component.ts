import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  check = false;
  errMsg ="";
  constructor(
    private _fb : FormBuilder,
    private _router : Router,
    private _auth : AuthService
  ) {
    this.loginForm = this._fb.group({
      username : ["", Validators.required],
      password : ["", Validators.required]
    })
   }

  ngOnInit(): void {
  }

  submit(){
    if(this.loginForm.invalid){
      this.check = true;
      return;
    }
    this._auth.do_login(this.loginForm.value).subscribe(result=>{
      if(result.success == true)
      {
        localStorage.setItem("admintoken", result.admintoken);
        this._router.navigate(["/admin/dash"]);
      }
      else{
        if(result.type == 1)
          this.errMsg = "This Username and Password is Incorrect";
        if(result.type == 2)
          this.errMsg = "This Password is Incorrect";
        
      }
    })
  }

}
