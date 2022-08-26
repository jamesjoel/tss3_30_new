import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyPageComponent } from './pages/my-page/my-page.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserComponent } from './user.component';
import { BackdoorGuard } from './guards/backdoor.guard';
import { AntiBackdoorGuard } from './guards/anti-backdoor.guard';

const routes: Routes = [
  {
    path : "",
    component : UserComponent,
    children : [
      {
        path : "",
        component : HomeComponent
      },
      {
        path : "about",
        component : AboutComponent
      },
      {
        path : "contact",
        component : ContactComponent
      },
      {
        path : "login",
        component : LoginComponent,
        canActivate : [AntiBackdoorGuard]
      },
      {
        path : "signup",
        component : SignupComponent,
        canActivate : [AntiBackdoorGuard]
      },
      {
        path : "my-page",
        component : MyPageComponent
      },
      {
        path : "my-profile",
        component : MyProfileComponent,
        canActivate : [BackdoorGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
