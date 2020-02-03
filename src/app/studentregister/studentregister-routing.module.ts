import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentregisterPage } from './studentregister.page';

const routes: Routes = [
  {
    path: '',
    component: StudentregisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentregisterPageRoutingModule {}
