import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { checkPass  } from '../../helpers/custom.validation';
import { Router } from '@angular/router';
import { CityService } from '../../../services/city.service';
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
    private _city : CityService,
    private _router : Router,
    private _user : UserService
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
    },
    {
      validator : [checkPass()]
    });

    this._city.getAllCity().subscribe(result=>{
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

      this._user.saveData(this.signupForm.value).subscribe(result=>{
        this._router.navigate(["/login"]);
      })
    }
  }
}
