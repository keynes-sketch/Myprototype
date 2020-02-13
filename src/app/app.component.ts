import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';


import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';



import { auth } from 'firebase/app';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  fas = fas;
  far = far;
  fab = fab ;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public afAuth: AngularFireAuth
  ) {
    this.initializeApp();
  }

  initializeApp() {

    this.platform.ready().then(() => {

      this.afAuth.user.subscribe(user => {

        if (user) {

          this.router.navigate(['/view-client']);

        } else {

          this.router.navigate(['/adminlogin']);

        }

      }, err => {

        this.router.navigate(['/adminlogin']);

      }, () => {

        this.splashScreen.hide();

      });

      this.statusBar.styleDefault();

    });

  }
}
