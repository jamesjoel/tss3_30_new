import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Box1Component } from './box1/box1.component';
import { Box2Component } from './box2/box2.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Domevent1Component } from './domevent1/domevent1.component';
import { HelpsComponent } from './helps/helps.component';
import { DemoPipe } from './demo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Box1Component,
    Box2Component,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    Domevent1Component,
    HelpsComponent,
    DemoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
