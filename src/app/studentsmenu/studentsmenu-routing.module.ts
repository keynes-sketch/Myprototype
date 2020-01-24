import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsmenuPage } from './studentsmenu.page';

const routes: Routes = [
  {
    path: '',
    component: StudentsmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsmenuPageRoutingModule {}
