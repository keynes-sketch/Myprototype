import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, OnInit, Inject, LOCALE_ID, ViewChild} from '@angular/core';
import {AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';



@Component({
  selector: 'app-year-planner',
  templateUrl: './year-planner.page.html',
  styleUrls: ['./year-planner.page.scss'],
})

export class YearPlannerPage implements OnInit {
  [x: string]: any;

  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  };
 
  minDate = new Date().toISOString();
 
  eventSource = [];
  viewTitle;
 
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
 
  @ViewChild(CalendarComponent, { static: false }) myCal: CalendarComponent;

  // tslint:disable-next-line: max-line-length
  constructor( private alertCtrl: AlertController, @Inject(LOCALE_ID) private locale: string ) { }

  ngOnInit() {

    this.resetEvent();
  }

  resetEvent() {
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    };
  }

  // Create the right event format and reload source
  addEvent() {
    const eventCopy = {
      title: this.event.title,
      startTime:  new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay,
      desc: this.event.desc
    };
 
    if (eventCopy.allDay) {
      const start = eventCopy.startTime;
      const end = eventCopy.endTime;
 
      eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
    }
 
    this.eventSource.push(eventCopy);
    this.myCal.loadEvents();
    this.resetEvent();
  }

  // Change current month/week/day
  next() {
   // tslint:disable-next-line: no-string-literal
   const swiper = document.querySelector('.swiper-container')['swiper'];
   swiper.slideNext();
 }
  
 back() {
   // tslint:disable-next-line: no-string-literal
   const swiper = document.querySelector('.swiper-container')['swiper'];
   swiper.slidePrev();
 }
  
 // Change between month/week/day
 changeMode(mode) {
   this.calendar.mode = mode;
 }
  
 // Focus today
 today() {
   this.calendar.currentDate = new Date();
 }
  
 // Selected date reange and hence title changed
 onViewTitleChanged(title) {
   this.viewTitle = title;
 }

// Calendar event was clicked

async onEventSelected(event) {
  // Use Angular date pipe for conversion
  const start = formatDate(event.startTime, 'medium', this.locale) ;
  const end = formatDate(event.endTime, 'medium', this.locale);

  const alert = await this.alertCtrl.create({
    header: event.title,
    subHeader: event.desc,
    message: 'From: ' + start + '<br><br>To: ' + end,
    buttons: ['OK']
  });
  alert.present();
}
 
// Time slot was clicked
onTimeSelected(ev) {
  const selected = new Date(ev.selectedTime);
  this.event.startTime = selected.toISOString();
  selected.setHours(selected.getHours() + 1);
  this.event.endTime = (selected.toISOString());
}

}


