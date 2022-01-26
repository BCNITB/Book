import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A001SiciliaPageRoutingModule } from './a001-sicilia-routing.module';

import { A001SiciliaPage } from './a001-sicilia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A001SiciliaPageRoutingModule
  ],
  declarations: [A001SiciliaPage]
})
export class A001SiciliaPageModule {}
