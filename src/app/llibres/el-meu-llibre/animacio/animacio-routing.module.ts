import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimacioPage } from './animacio.page';

const routes: Routes = [
  {
    path: '',
    component: AnimacioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimacioPageRoutingModule {}
