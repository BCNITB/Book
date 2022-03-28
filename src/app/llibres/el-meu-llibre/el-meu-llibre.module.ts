import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElMeuLlibrePageRoutingModule } from './el-meu-llibre-routing.module';

import { ElMeuLlibrePage } from './el-meu-llibre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElMeuLlibrePageRoutingModule
  ],
  declarations: [ElMeuLlibrePage]
})
export class ElMeuLlibrePageModule {}
