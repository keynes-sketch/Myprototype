import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LecturerNoticeBoardPage } from './lecturer-notice-board.page';

const routes: Routes = [
  {
    path: '',
    component: LecturerNoticeBoardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LecturerNoticeBoardPageRoutingModule {}
