import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { LoadingController, ToastController } from '@ionic/angular';

import { Router } from '@angular/router';

import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.page.html',
  styleUrls: ['./add-client.page.scss'],
})
export class AddClientPage implements OnInit {

  // tslint:disable-next-line: variable-name
  validations_form: FormGroup;

  validation_messages = {

   name: [

     { type: 'required', message: 'Name is required.' }

   ],

   course: [

     { type: 'required', message: 'Course is required.' }

   ],

   contact: [

     { type: 'required', message: 'Contact is required.' },

   ]

 };

  // tslint:disable-next-line: max-line-length
  constructor(private fb: FormBuilder, private router: Router,  public toastCtrl: ToastController, public loadingCtrl: LoadingController, public firebaseService: FirebaseService) { }

  ngOnInit() {
    this.resetFields();
  }


  resetFields() {

    this.validations_form = this.fb.group({

      name: new FormControl('', Validators.required),

      course: new FormControl('', Validators.required),

      contact: new FormControl('', Validators.required),


    });

  }



  onSubmit(value) {

    const data = {

      name: value.name,

      course: value.course,

      contact: value.contact



    };

    this.firebaseService.createTask(data)

    .then(

      res => {

        this.router.navigate(['/admin']);

      }

    );

  }

}
