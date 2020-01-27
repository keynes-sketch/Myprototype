import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentNoticeboardPage } from './student-noticeboard.page';

const routes: Routes = [
  {
    path: '',
    component: StudentNoticeboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentNoticeboardPageRoutingModule {}
