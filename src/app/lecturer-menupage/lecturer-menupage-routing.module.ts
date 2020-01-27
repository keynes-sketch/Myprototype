import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LecturerMenupagePage } from './lecturer-menupage.page';

const routes: Routes = [
  {
    path: '',
    component: LecturerMenupagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LecturerMenupagePageRoutingModule {}
