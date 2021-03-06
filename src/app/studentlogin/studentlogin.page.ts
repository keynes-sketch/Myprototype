import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.page.html',
  styleUrls: ['./studentlogin.page.scss'],
})
export class StudentloginPage implements OnInit {

  constructor( private navCtrl: NavController,
               private authService: AuthenticationService,
               private formBuilder: FormBuilder) { }

  // tslint:disable-next-line: variable-name
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

  ngOnInit() {

    this.validations_form = this.formBuilder.group({
      id: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+/[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });

  }


  loginUser(value) {
    this.authService.loginUser(value)
    .then(res => {
      console.log(res);
      this.errorMessage = '';
      this.navCtrl.navigateForward('/studentsmenu');
    }, err => {
      this.errorMessage = err.message;
    });
  }

  goToRegisterPage() {
    this.navCtrl.navigateForward('/studentregister');
  }

}
