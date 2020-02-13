import { NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AddClientPageRoutingModule } from './add-client-routing.module';

import { AddClientPage } from './add-client.page';

const routes: Routes = [

  {

    path: '',

    component: AddClientPage

  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    AddClientPageRoutingModule
  ],
  declarations: [AddClientPage],
  providers : [Location]
})
export class AddClientPageModule {}
