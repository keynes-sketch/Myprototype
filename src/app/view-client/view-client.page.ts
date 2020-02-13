import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { LoadingController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.page.html',
  styleUrls: ['./view-client.page.scss'],
})
export class ViewClientPage implements OnInit {



  items: Array<any>;

  // tslint:disable-next-line: max-line-length
  constructor(public firebaseService: FirebaseService, private authService: AuthenticationService, private router: Router,  private route: ActivatedRoute,   public loadingCtrl: LoadingController) { }

  ngOnInit() {
    if (this.route && this.route.data) {

      this.getData();

    }
  }


  async getData() {

    const loading = await this.loadingCtrl.create({

      message: 'Please wait...'

    });

    this.presentLoading(loading);



    this.route.data.subscribe(routeData => {

      routeData.data.subscribe(data => {

        loading.dismiss();

        this.items = data;

      });

    });

  }



  async presentLoading(loading) {

    return await loading.present();

  }



  logout() {

    this.authService.doLogout()

    .then(res => {

      this.router.navigate(['/admin']);

    }, err => {

      console.log(err);

    });

  }



}
