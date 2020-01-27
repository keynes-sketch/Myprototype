import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuestMenupagePageRoutingModule } from './guest-menupage-routing.module';

import { GuestMenupagePage } from './guest-menupage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuestMenupagePageRoutingModule
  ],
  declarations: [GuestMenupagePage]
})
export class GuestMenupagePageModule {}
