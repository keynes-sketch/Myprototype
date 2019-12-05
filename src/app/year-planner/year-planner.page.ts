import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

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

  constructor(public navCtrl: NavController) { }


 

  ngOnInit() {
  }

}
