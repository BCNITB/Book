import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConillPage } from './conill.page';

const routes: Routes = [
  {
    path: '',
    component: ConillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConillPageRoutingModule {}
