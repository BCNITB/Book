import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaGirafaIElConillPage } from './la-girafa-i-el-conill.page';

const routes: Routes = [
  {
    path: '',
    component: LaGirafaIElConillPage
  },
  {
    path: 'girafa',
    loadChildren: () => import('./girafa/girafa.module').then( m => m.GirafaPageModule)
  },
  {
    path: 'conill',
    loadChildren: () => import('./conill/conill.module').then( m => m.ConillPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaGirafaIElConillPageRoutingModule {}
