import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  stuForm : FormGroup;

  constructor(
    private _fb : FormBuilder,
    private _http : HttpClient
  ){
    this.stuForm = this._fb.group({
      name : "",
      age : null
    })
  }

  submit(){
    this._http.post<any>("http://localhost:3000/student", this.stuForm.value).subscribe(result=>{
      console.log(result);
    })
  }

  

}
