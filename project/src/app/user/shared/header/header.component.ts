import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  allCate : any;
  constructor(
    public _login : LoginService,
    private _cate : CategoryService
  ) {
    this._cate.getAll().subscribe(result=>{
      // console.log(result);
      this.allCate = result;
    })
   }

  ngOnInit(): void {
  }

}
