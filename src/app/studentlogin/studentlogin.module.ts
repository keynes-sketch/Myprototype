import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentloginPageRoutingModule } from './studentlogin-routing.module';

import { StudentloginPage } from './studentlogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentloginPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [StudentloginPage]
})
export class StudentloginPageModule {}
