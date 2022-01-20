import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionBPage } from './option-b.page';

const routes: Routes = [
  {
    path: '',
    component: OptionBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionBPageRoutingModule {}
