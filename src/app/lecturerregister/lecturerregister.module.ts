import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LecturerregisterPageRoutingModule } from './lecturerregister-routing.module';

import { LecturerregisterPage } from './lecturerregister.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LecturerregisterPageRoutingModule
  ],
  declarations: [LecturerregisterPage]
})
export class LecturerregisterPageModule {}
