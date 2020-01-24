import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentloginPage } from './studentlogin.page';

const routes: Routes = [
  {
    path: '',
    component: StudentloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentloginPageRoutingModule {}
