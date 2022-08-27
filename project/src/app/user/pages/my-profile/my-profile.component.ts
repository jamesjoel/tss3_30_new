import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  userInfo:any;
  constructor(
    private _user : UserService
  ) {

    this._user.getData().subscribe(result=>{
      // console.log(result);
      this.userInfo = result[0];
    })

   }

  ngOnInit(): void {
  }

}
