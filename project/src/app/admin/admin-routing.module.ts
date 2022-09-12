import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CityComponent } from './pages/city/city.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { LoginComponent } from './pages/login/login.component';
import { BackdoorGuard } from './guards/backdoor.guard';
import { CategoryComponent } from './pages/category/category.component';
import { ProductComponent } from './pages/product/product.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { AntiBackdoorGuard } from './guards/anti-backdoor.guard';

const routes: Routes = [
  {
    path : "",
    component : AdminComponent,
    children : [
      {
        path : "",
        component : LoginComponent,
        canActivate : [AntiBackdoorGuard]
      },
      {
        path : "dash",
        component : DashboardComponent,
        canActivate : [BackdoorGuard]
      },
      {
        path :"users",
        component : UsersComponent,
        canActivate : [BackdoorGuard]
      },
      {
        path : "city",
        component : CityComponent,
        canActivate : [BackdoorGuard]
      },
      {
        path : "category",
        component : CategoryComponent,
        canActivate : [BackdoorGuard]
      },
      {
        path : "product",
        component : ProductComponent,
        canActivate : [BackdoorGuard]
      },
      {
        path : "product/add",
        component : AddProductComponent,
        canActivate:[BackdoorGuard]
      },
      {
        path : "product/edit/:id",
        component : AddProductComponent,
        canActivate : [BackdoorGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
