import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LecturerloginPageRoutingModule } from './lecturerlogin-routing.module';

import { LecturerloginPage } from './lecturerlogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LecturerloginPageRoutingModule
  ],
  declarations: [LecturerloginPage]
})
export class LecturerloginPageModule {}
