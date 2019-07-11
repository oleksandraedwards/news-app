import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {HomePageModule} from './home/home.module';
import {ArticleContentPageModule} from './home/article-content/article-content.module';
import {AboutPageModule} from './about/about.module';
import { IonicStorageModule } from '@ionic/storage';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    HomePageModule,
    ArticleContentPageModule,
    AboutPageModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    // SocialSharing
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
