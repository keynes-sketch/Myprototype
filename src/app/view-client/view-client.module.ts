import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewClientPageRoutingModule } from './view-client-routing.module';

import { ViewClientPage } from './view-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewClientPageRoutingModule
  ],
  declarations: [ViewClientPage]
})
export class ViewClientPageModule {}
