import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentNoticeboardPageRoutingModule } from './student-noticeboard-routing.module';

import { StudentNoticeboardPage } from './student-noticeboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentNoticeboardPageRoutingModule
  ],
  declarations: [StudentNoticeboardPage]
})
export class StudentNoticeboardPageModule {}
