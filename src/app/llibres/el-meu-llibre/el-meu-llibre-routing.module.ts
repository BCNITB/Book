import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElMeuLlibrePage } from './el-meu-llibre.page';

const routes: Routes = [
  {
    path: '',
    component: ElMeuLlibrePage
  },
  {
    path: 'text',
    loadChildren: () => import('./text/text.module').then( m => m.TextPageModule)
  },
  {
    path: 'imatge',
    loadChildren: () => import('./imatge/imatge.module').then( m => m.ImatgePageModule)
  },
  {
    path: 'animacio',
    loadChildren: () => import('./animacio/animacio.module').then( m => m.AnimacioPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'so',
    loadChildren: () => import('./so/so.module').then( m => m.SoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElMeuLlibrePageRoutingModule {}
