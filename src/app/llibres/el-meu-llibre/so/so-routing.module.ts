import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoPage } from './so.page';

const routes: Routes = [
  {
    path: '',
    component: SoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoPageRoutingModule {}
