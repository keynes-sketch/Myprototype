import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ViewClientPageRoutingModule } from './view-client-routing.module';

import { ViewClientPage } from './view-client.page';
import { ViewClientResolver } from './view-client.resolver';

const routes: Routes = [

  {

    path: '',

    component: ViewClientPage,

    resolve: {

      data: ViewClientResolver

    }

  }

];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ViewClientPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewClientPage],
  providers: [

    ViewClientResolver

  ]
})
export class ViewClientPageModule {}
