import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
   styleUrls: ['home.page.scss'],
})
export class HomePage {
  fas = fas;
  far = far ;
  fab = fab;

  constructor(public navCtrl: NavController) {}


}
