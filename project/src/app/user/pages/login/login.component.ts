import { Component, OnInit } from '@angular/core';
import  { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  check = false;
  errMsg = "";

  constructor(
    private _fb : FormBuilder,
    private _login : LoginService,
    private _router : Router
  ) {
    this.loginForm = this._fb.group({
      email : ["", [Validators.required, Validators.email]],
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
    else{
      // console.log(this.loginForm.value);
      this._login.do_login(this.loginForm.value).subscribe(result=>{
        //console.log(result);
        if(result.success == false){
          if(result.type == 1){
            this.errMsg = "This Username/Email and Password is Incorrect";
          }
          if(result.type==2){
            this.errMsg = "This Password is Incorrect";

          }
        }
        else{
          localStorage.setItem("token", result.token);
          // console.log(result);
          this._router.navigate(["/"]);
        }


      })
    }
  }

}
