import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
/*
  FormBuilder ------ Service
  FormGroup ----- Interface
*/

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm : FormGroup;
  allCity : any;
  check = false;

  constructor(
    private _fb : FormBuilder,
    private _http : HttpClient
  ) {

    this.signupForm = this._fb.group({
      fullname : ["", Validators.required],
      email : ["", [Validators.required, Validators.email]],
      password : ["", Validators.required],
      re_password : ["", Validators.required],
      address : ["", Validators.required],
      city : ["", Validators.required],
      gender : ["", Validators.required],
      contact : ["", Validators.required]
    });

    this._http.get("http://localhost:3000/api/city").subscribe(result=>{
      // console.log(result);
      this.allCity = result;
    })



   }

  ngOnInit(): void {
  }

  submit(){
    // console.log(this.signupForm.value);
    if(this.signupForm.invalid){
      this.check = true;
    }else{

      this._http.post("http://localhost:3000/api/user", this.signupForm.value).subscribe(result=>{
        console.log(result);
      })
    }
  }
}
