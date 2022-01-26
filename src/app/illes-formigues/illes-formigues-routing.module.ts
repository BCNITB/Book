import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IllesFormiguesPage } from './illes-formigues.page';

const routes: Routes = [
  {
    path: '',
    component: IllesFormiguesPage
  },
  {
    path: 'a001-sicilia',
    loadChildren: () => import('./a001-sicilia/a001-sicilia.module').then( m => m.A001SiciliaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IllesFormiguesPageRoutingModule {}
