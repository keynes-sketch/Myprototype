import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID} from '@angular/core';
import {AlertController} from '@ionic/angular';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-year-planner',
  templateUrl: './year-planner.page.html',
  styleUrls: ['./year-planner.page.scss'],
})
export class YearPlannerPage implements OnInit {

  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  };

  minDate = new Date(). toISOString();

  eventSource = [];
  viewTitle;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  @ViewChild(CalendarComponent, {static: true} ) myCal: CalendarComponent;

  constructor( private alertCtrl: AlertController,  @Inject(LOCALE_ID) private locale: string) { }

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

  addEvent() {
    let eventCopy = {
      title: this.event.title,
      startTime: new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay,
      desc: this.event.desc

    }

    if (eventCopy.allDay) {
      let start = eventCopy.startTime;
      let end = eventCopy.endTime;

    }
    this.eventSource.push(eventCopy);
    this.myCal.loadEvents();
    this.resetEvent();
  }

  // change current month/week/day
  next(){
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slideNext();
  }

  back(){
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slidePrev();
  }

  // change between month/week/day
  changeMode(mode){
    this.calendar.mode = mode;
  }

  // focus today
  today(){
    this.calendar.currentDate = new Date();
  }

  // selected date reange and hence title changed
  onViewTitleChanged(title){
    this.viewTitle = title;
  }

  // calendar events was clicked
  async onEventSelected(event){
    // use angular date pipe for conversion
    let start = formatDate(event.startTime, 'medium', this.locale);
    let end = formatDate(event.endTime, 'medium', this.locale);

    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader : event.desc,
      message: 'From : ' + start + '<br><br>To: ' + end,
      buttons: ['OK']
    });
    alert.present();


  }

  // time slot was clicked
  onTimeSelected(ev){
    let selected = new Date(ev.SelectedTime);
    this.event.startTime = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.event.endTime = (selected.toISOString());
  }


}
