import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService  } from '../../../services/product.service';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  proForm : FormGroup;
  check = false;
  allCate :any;

  constructor(
    private _fb : FormBuilder,
    private _pro : ProductService,
    private _router : Router,
    private _cate : CategoryService
  ) {
    this.proForm = this._fb.group({
      name : ["", Validators.required],
      price : [null, Validators.required],
      category : ["", Validators.required],
      description : ["", Validators.required],
      discount : [null, Validators.required]
    });

    this._cate.getAll().subscribe(result=>{
      this.allCate = result;
    })
   }

  ngOnInit(): void {
  }

  submit(){
    if(this.proForm.invalid){
      this.check = true;
      return;
    }
    this._pro.save(this.proForm.value).subscribe(result=>{
      console.log(result);
      this._router.navigate(["/admin/product"]);
    })

  }

}
