import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  allProduct : any;
  delItem : any;
  product:any;
  constructor(
    private _pro : ProductService
  ) {
    this._pro.getAll().subscribe(result=>{
      this.allProduct = result;
    })
   }

  ngOnInit(): void {
  }
  askDelete(obj:any){
    this.product = obj;
    this.delItem = { name : obj.name, label : "Product"};
  }
  confDelete(btn:any){
    this._pro.delete(this.product._id).subscribe(result=>{
      let n = this.allProduct.indexOf(this.product);
      this.allProduct.splice(n, 1);
      btn.click();
    })
  }

}
