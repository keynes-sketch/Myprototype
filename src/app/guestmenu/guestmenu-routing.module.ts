import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestmenuPage } from './guestmenu.page';

const routes: Routes = [
  {
    path: '',
    component: GuestmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestmenuPageRoutingModule {}
