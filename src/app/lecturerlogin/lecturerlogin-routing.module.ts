import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LecturerloginPage } from './lecturerlogin.page';

const routes: Routes = [
  {
    path: '',
    component: LecturerloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LecturerloginPageRoutingModule {}
