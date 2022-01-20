import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page001Page } from './page001.page';

const routes: Routes = [
  {
    path: '',
    component: Page001Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page001PageRoutingModule {}
