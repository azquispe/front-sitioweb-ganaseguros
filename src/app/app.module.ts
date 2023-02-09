import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FootBarComponent } from './foot-bar/foot-bar.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { BannerBodyComponent } from './banner-body/banner-body.component';
import { BodySection1Component } from './body-section1/body-section1.component';
import { BodySection2Component } from './body-section2/body-section2.component';
import { BodySection3Component } from './body-section3/body-section3.component';
import { BodySection4Component } from './body-section4/body-section4.component';
import { BodySection5Component } from './body-section5/body-section5.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { BodySection6Component } from './body-section6/body-section6.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FootBarComponent,
    MainBodyComponent,
    BannerBodyComponent,
    BodySection1Component,
    BodySection2Component,
    BodySection3Component,
    BodySection4Component,
    BodySection5Component,
    DropdownDirective,
    BodySection6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
