import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionCPage } from './option-c.page';

const routes: Routes = [
  {
    path: '',
    component: OptionCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionCPageRoutingModule {}
