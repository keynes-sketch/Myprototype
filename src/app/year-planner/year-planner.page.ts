import { Component, OnInit } from '@angular/core';
import {NavController,ModalController,AlertController} from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-year-planner',
  templateUrl: './year-planner.page.html',
  styleUrls: ['./year-planner.page.scss'],
})
export class YearPlannerPage implements OnInit {

  eventSource=[];
  viewTitle:string;
  selectedDay = new Date();

  calender ={
    mode:'month',
    currentDate: this.selectedDay
  }

  constructor(public navCtrl: NavController, private modalCtrl:ModalController, private alertCtrl :AlertController) { }

  addEvent(){

let modal= this.modalCtrl.create('EventModalPage',{selectedDay: this.selectedDay});

modal.present();
modal.onDidDismiss(data => {

if (data){
  let eventData = data ;

  eventData.startTime = new Date (data.startTime);
  eventData.endTime = new Date (data.endTime);

  let events = this.eventSource;
  events.push(eventData);
  this.eventSource =[];
  setTimeout(() => {
    this.eventSource = events

  });
  
}

});



  }

onViewTitleChanged(title){

this.viewTitle=title;

}

onTimeSelected(ev){

  this.selectedDay = ev.selectedTime;

}

onEventSelected(event){

  let start = moment(event.startTime).format('LLLL');
  let end = moment(event.endTime).format('LLLL');

  let alert=this.alertCtrl.create({

title: '' + event.title,
subtitle:'From: ' + start + '<br>  To:' +end,
buttons:['OK']


  });

  alert.present();

}
  ngOnInit() {
  }

}
