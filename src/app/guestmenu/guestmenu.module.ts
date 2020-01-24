import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuestmenuPageRoutingModule } from './guestmenu-routing.module';

import { GuestmenuPage } from './guestmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuestmenuPageRoutingModule
  ],
  declarations: [GuestmenuPage]
})
export class GuestmenuPageModule {}
