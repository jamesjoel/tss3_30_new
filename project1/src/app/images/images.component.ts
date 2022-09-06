import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  imgArr:any=[];
  constructor(
    private _up : UploadService
  ) {
    this._up.getAll().subscribe(result=>{
      this.imgArr = result;
    })
   }

  ngOnInit(): void {
  }

  upload(img:any){
    // console.log(img.files); 
    let file = img.files[0];
    let form = new FormData();
    form.append("image", file);

    this._up.do_upload(form).subscribe(result=>{
      console.log(result);
      this.imgArr.push(result);
    })
  }

}
