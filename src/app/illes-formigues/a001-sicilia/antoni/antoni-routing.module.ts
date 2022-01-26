import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntoniPage } from './antoni.page';

const routes: Routes = [
  {
    path: '',
    component: AntoniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntoniPageRoutingModule {}
