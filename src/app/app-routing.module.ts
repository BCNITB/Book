import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'el-meu-llibre',
    loadChildren: () => import('./llibres/el-meu-llibre/el-meu-llibre.module').then( m => m.ElMeuLlibrePageModule)
  },  {
    path: 'la-girafa-i-el-conill',
    loadChildren: () => import('./llibres/la-girafa-i-el-conill/la-girafa-i-el-conill.module').then( m => m.LaGirafaIElConillPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
