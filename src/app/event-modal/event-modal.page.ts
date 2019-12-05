import { Component, OnInit } from '@angular/core';
import {NavController,NavParams, ViewController} from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.page.html',
  styleUrls: ['./event-modal.page.scss'],
})
export class EventModalPage implements OnInit {

  event = {
    startTime: new Date(). toISOString(), endTime: new Date(). toISOString(), allDay:false
  }
  minDate = new Date().toISOString();
  constructor(public navCtrl: NavController, public navParams : NavParams, private viewCtrl: ViewController) { 
    const preselectedDate = moment(this.navParams.get('selectedDay')) .format();

    this.event.startTime = preselectedDate;
    this.event.endTime = preselectedDate;
  }

save(){
  this. viewCtrl. dismiss(this.event);
}

  ngOnInit() {
  }

}
