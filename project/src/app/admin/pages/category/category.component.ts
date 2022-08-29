import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  cateForm : FormGroup;
  check = false;
  constructor(
    private _cate : CategoryService,
    private _fb : FormBuilder,
    private _router : Router
  ) {
    this.cateForm = this._fb.group({
      name : ["", Validators.required]
    })
   }

  ngOnInit(): void {
  }

  submit(){
    if(this.cateForm.invalid){
      this.check = true;
      return;
    }
    this._cate.save(this.cateForm.value).subscribe(result=>{
      // console.log(result);
      this._router.navigate(["/admin/dash"]);
    })
  }

}
