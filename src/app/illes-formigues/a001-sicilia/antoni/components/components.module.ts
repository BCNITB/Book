import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerseguirLladreComponent } from './perseguir-lladre/perseguir-lladre.component';
import { ContinuarPersecucioComponent } from './continuar-persecucio/continuar-persecucio.component';
import { DuurBossaComponent } from './duur-bossa/duur-bossa.component';
import { ParlarSoldatsComponent } from './parlar-soldats/parlar-soldats.component';

@NgModule({
  declarations: [
    PerseguirLladreComponent,
    ContinuarPersecucioComponent,
    DuurBossaComponent,
    ParlarSoldatsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PerseguirLladreComponent,
    ContinuarPersecucioComponent,
    DuurBossaComponent,
    ParlarSoldatsComponent
  ]
})
export class ComponentsModule { }
