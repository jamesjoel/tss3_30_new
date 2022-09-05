import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  allUser : any;
  delItem : any;
  user:any;

  constructor(
    private _user : UserService
  ) {
    this._user.getAll().subscribe(result=>{
      this.allUser = result;
    })
   }

  ngOnInit(): void {
  }


  askDelete(obj:any){
    this.delItem = { name : obj.fullname, label : "User"};
    this.user = obj;
  }

  deleteUser(btn:any){
    
  }
}
