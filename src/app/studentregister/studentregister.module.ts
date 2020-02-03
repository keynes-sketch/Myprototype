import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentregisterPageRoutingModule } from './studentregister-routing.module';

import { StudentregisterPage } from './studentregister.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentregisterPageRoutingModule
  ],
  declarations: [StudentregisterPage]
})
export class StudentregisterPageModule {}
