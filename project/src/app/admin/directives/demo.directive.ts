import { Directive } from '@angular/core';
import { ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective {

  
  constructor(
    private _ele : ElementRef
  ) {
    this._ele.nativeElement.style.backgroundColor = "red";
    this._ele.nativeElement.style.fontSize = "25px";
    this._ele.nativeElement.style.fontWeight = "bold";
    this._ele.nativeElement.style.color = "bold";

   }

   @HostListener('mouseover') demo(){
    console.log("hello world");
   }
   @HostListener('dblclick') demo2(){
    console.log("hello world");
   }

}
