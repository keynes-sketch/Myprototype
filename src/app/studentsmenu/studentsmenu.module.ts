import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentsmenuPageRoutingModule } from './studentsmenu-routing.module';

import { StudentsmenuPage } from './studentsmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentsmenuPageRoutingModule
  ],
  declarations: [StudentsmenuPage]
})
export class StudentsmenuPageModule {}
