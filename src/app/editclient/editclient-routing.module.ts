import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditclientPage } from './editclient.page';

const routes: Routes = [
  {
    path: '',
    component: EditclientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditclientPageRoutingModule {}
