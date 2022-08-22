import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DashComponent } from './pages/dash/dash.component';
import { SettingComponent } from './pages/setting/setting.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    HomeComponent,
    DashComponent,
    SettingComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
