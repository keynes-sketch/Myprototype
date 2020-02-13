import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { FirebaseService } from '../services/firebase.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-editclient',
  templateUrl: './editclient.page.html',
  styleUrls: ['./editclient.page.scss'],
})
export class EditclientPage implements OnInit {

  // tslint:disable-next-line: variable-name
  validations_form: FormGroup;
  item: any;
  load = false;




  // tslint:disable-next-line: max-line-length
  constructor(public firebaseService: FirebaseService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router,  private alertCtrl: AlertController,  public toastCtrl: ToastController,

              public loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.getData();
  }

  getData() {

    this.route.data.subscribe(routeData => {

     const data = routeData.data;

     if (data) {

       this.item = data;

     }

    });

    this.validations_form = this.fb.group({

      title: new FormControl(this.item.title, Validators.required),

      description: new FormControl(this.item.description, Validators.required)

    });

  }



  onSubmit(value) {

    const data = {

      name: value.name,

      course: value.course,

      contact: value.contact

    };

    this.firebaseService.updateTask(this.item.id, data)

    .then(

      res => {

        this.router.navigate(['/admin']);

      }

    );

  }



  async delete() {

    const alert = await this.alertCtrl.create({

      header: 'Confirm',

      message: 'Do you want to delete ' + this.item.title + '?',

      buttons: [

        {

          text: 'No',

          role: 'cancel',

          cssClass: 'secondary',

          handler: () => {}

        },

        {

          text: 'Yes',

          handler: () => {

            this.firebaseService.deleteTask(this.item.id)

            .then(

              res => {

                this.router.navigate(['/admin']);

              },

              err => console.log(err)

            );

          }

        }

      ]

    });

    await alert.present();

  }



}
