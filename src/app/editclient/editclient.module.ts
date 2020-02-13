import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditclientPageRoutingModule } from './editclient-routing.module';

import { EditclientPage } from './editclient.page';
import { EditclientResolver } from './editclient.resolver';

const routes: Routes = [

  {

    path: '',

    component: EditclientPage,

    resolve: {

      data: EditclientResolver

    }

  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditclientPageRoutingModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditclientPage],
  providers: [EditclientResolver]
})
export class EditclientPageModule {}
