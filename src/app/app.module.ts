import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgCalendarModule  } from 'ionic2-calendar';
import { AddeventPage } from './addevent/addevent.page';
import { Calendar } from '@ionic-native/calendar';



@NgModule({
  declarations: [AppComponent, AddeventPage],
  entryComponents: [AddeventPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, NgCalendarModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Calendar
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
