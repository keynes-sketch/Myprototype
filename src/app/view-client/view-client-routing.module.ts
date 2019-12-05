import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewClientPage } from './view-client.page';

const routes: Routes = [
  {
    path: '',
    component: ViewClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewClientPageRoutingModule {}
