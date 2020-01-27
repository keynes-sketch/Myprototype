import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LecturerMenupagePageRoutingModule } from './lecturer-menupage-routing.module';

import { LecturerMenupagePage } from './lecturer-menupage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LecturerMenupagePageRoutingModule
  ],
  declarations: [LecturerMenupagePage]
})
export class LecturerMenupagePageModule {}
