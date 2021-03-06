import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YearPlannerPageRoutingModule } from './year-planner-routing.module';

import { YearPlannerPage } from './year-planner.page';
import { RouterModule } from '@angular/router';
import { NgCalendarModule  } from 'ionic2-calendar';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YearPlannerPageRoutingModule,
    NgCalendarModule,
    RouterModule.forChild([
      {
        path: '',
        component: YearPlannerPage
      }
    ]),
    FontAwesomeModule
  ],
  declarations: [YearPlannerPage]
})
export class YearPlannerPageModule {}
