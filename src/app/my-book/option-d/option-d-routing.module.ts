import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionDPage } from './option-d.page';

const routes: Routes = [
  {
    path: '',
    component: OptionDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionDPageRoutingModule {}
