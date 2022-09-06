import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component'
import { ContactComponent } from './contact/contact.component';
import { Domevent1Component } from './domevent1/domevent1.component';
import { HelpsComponent } from './helps/helps.component';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './images/images.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';


const routes: Routes = [
  {
    path : "about",
    component : AboutComponent
  },
  {
    path : "contact",
    component : ContactComponent
  },
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "event1",
    component : Domevent1Component
  },
  {
    path : "help",
    component : HelpsComponent
  },
  {
    path : "parent-to-child",
    component : ParentToChildComponent
  },
  {
    path : "images",
    component : ImagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
