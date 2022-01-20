import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionAPage } from './option-a.page';

const routes: Routes = [
  {
    path: '',
    component: OptionAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionAPageRoutingModule {}
