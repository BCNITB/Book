import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntoniPageRoutingModule } from './antoni-routing.module';

import { AntoniPage } from './antoni.page';

import { ComponentsModule } from './components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntoniPageRoutingModule
  ],
  declarations: [
    AntoniPage,
    ComponentsModule
  ],
  exports: [
    ComponentsModule
  ]
})
export class AntoniPageModule {}
