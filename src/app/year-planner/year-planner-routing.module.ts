import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YearPlannerPage } from './year-planner.page';

const routes: Routes = [
  {
    path: '',
    component: YearPlannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YearPlannerPageRoutingModule {}
