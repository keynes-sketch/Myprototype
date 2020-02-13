import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { AuthenticationService } from '../services/authentication.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.page.html',
  styleUrls: ['./adminlogin.page.scss'],
})
export class AdminloginPage implements OnInit {

  validations_form: FormGroup;

  errorMessage = '';



  validation_messages = {

   email: [

     { type: 'required', message: 'Email is required.' },

     { type: 'pattern', message: 'Please enter a valid email.' }

   ],

   password: [

     { type: 'required', message: 'Password is required.' },

     { type: 'minlength', message: 'Password must be at least 5 characters long.' }

   ]

 };

  constructor( private authService: AuthenticationService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
  }

  tryLogin(value) {

    this.authService.doLogin(value)

    .then(res => {

      this.router.navigate(['/admin']);

    }, err => {

      this.errorMessage = err.message;

      console.log(err);

    });

  }



  goRegisterPage() {

    this.router.navigate(['/adminregister']);

  }

}


