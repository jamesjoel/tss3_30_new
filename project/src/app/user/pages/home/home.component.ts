import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../../../services/my-service.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allProduct : any;
  constructor(
    public _my : MyServiceService,
    private _pro : ProductService

  ) { 
    this._pro.getAll().subscribe(result=>{
      this.allProduct = result;
    })
  }

  ngOnInit(): void {
  }

}
