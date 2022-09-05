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
  allCate : any;
  check = false;
  cate : any;
  checkUpdate = false;


  delItem : any;


  constructor(
    private _cate : CategoryService,
    private _fb : FormBuilder,
    private _router : Router
  ) {
    this.cateForm = this._fb.group({
      name : ["", Validators.required]
    })

    this._cate.getAll().subscribe(result=>{
      this.allCate = result;

    })

   }

  ngOnInit(): void {
  }

  submit(){
    // console.log(this.cateForm.value);
    // return;
    if(this.cateForm.invalid){
      this.check = true;
      return;
    }

    if(this.checkUpdate){

      this._cate.update(this.cate._id, this.cateForm.value).subscribe(result=>{
        let n = this.allCate.indexOf(this.cate);
        this.allCate[n]=this.cateForm.value;
        this.cancelUpdate();
      })
    }else{

      this._cate.save(this.cateForm.value).subscribe(result=>{
        this.allCate.push(result);
        this.cateForm.controls['name'].setValue("");
      })
    }


  }

  askDelete(obj:any){
    console.log(obj);
    this.cate = obj;

    this.delItem = { name : obj.name, label : "Category" };
  }

  confDelete(btn:any){
    this._cate.delete(this.cate._id).subscribe(result=>{
      // console.log(result);
      let n = this.allCate.indexOf(this.cate);
      this.allCate.splice(n, 1);
      btn.click();
    })
  }
  askUpdate(obj:any){
    this.checkUpdate = true;
    this.cate = obj;
    this.cateForm.controls['name'].setValue(this.cate.name);
  }
  
  cancelUpdate(){
    this.checkUpdate = false;
    this.cate ={};
    this.cateForm.controls['name'].setValue("");

  }



  demo(y:any){
    // console.log("**************", y);
    console.log(y.innerHTML)
  }

}
