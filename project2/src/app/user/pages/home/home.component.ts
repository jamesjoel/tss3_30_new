import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { checkNum, checkSize, checkPass } from '../../../helpers/custom.validator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  x : FormGroup;
  check = false;

  constructor(
    private _fb : FormBuilder
  ) {
    this.x = this._fb.group({
      name : ["", Validators.required],
      email : ["", [Validators.required, Validators.email]],
      contact : ["", Validators.required],
      password : ["", Validators.required],
      re_password : ["", Validators.required]
    },{
      validator : [checkNum(), checkSize(), checkPass()]
    });
   }

  ngOnInit(): void {
  }

  submit(){
    if(this.x.invalid){
      this.check = true;
    }else{

      console.log(this.x.value);
    }
  }

}
