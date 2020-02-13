import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';

import { ADMINregisterPageRoutingModule } from './adminregister-routing.module';

import { ADMINregisterPage } from './adminregister.page';

const routes: Routes = [

  {

    path: '',

    component: ADMINregisterPage

  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ADMINregisterPageRoutingModule
  ],
  declarations: [ADMINregisterPage]
})
export class ADMINregisterPageModule {}
