import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A001SiciliaPage } from './a001-sicilia.page';

const routes: Routes = [
  {
    path: '',
    component: A001SiciliaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A001SiciliaPageRoutingModule {}
