import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LecturerregisterPage } from './lecturerregister.page';

const routes: Routes = [
  {
    path: '',
    component: LecturerregisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LecturerregisterPageRoutingModule {}
