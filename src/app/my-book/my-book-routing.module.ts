import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyBookPage } from './my-book.page';

const routes: Routes = [
  {
    path: '',
    component: MyBookPage
  },
  {
    path: 'page001',
    loadChildren: () => import('./page001/page001.module').then( m => m.Page001PageModule)
  },
  {
    path: 'option-a',
    loadChildren: () => import('./option-a/option-a.module').then( m => m.OptionAPageModule)
  },
  {
    path: 'option-b',
    loadChildren: () => import('./option-b/option-b.module').then( m => m.OptionBPageModule)
  },
  {
    path: 'option-c',
    loadChildren: () => import('./option-c/option-c.module').then( m => m.OptionCPageModule)
  },
  {
    path: 'option-d',
    loadChildren: () => import('./option-d/option-d.module').then( m => m.OptionDPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyBookPageRoutingModule {}
