import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestMenupagePage } from './guest-menupage.page';

const routes: Routes = [
  {
    path: '',
    component: GuestMenupagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestMenupagePageRoutingModule {}
