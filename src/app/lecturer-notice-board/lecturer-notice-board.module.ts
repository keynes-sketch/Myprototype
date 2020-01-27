import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LecturerNoticeBoardPageRoutingModule } from './lecturer-notice-board-routing.module';

import { LecturerNoticeBoardPage } from './lecturer-notice-board.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LecturerNoticeBoardPageRoutingModule
  ],
  declarations: [LecturerNoticeBoardPage]
})
export class LecturerNoticeBoardPageModule {}
