import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImatgePageRoutingModule } from './imatge-routing.module';

import { ImatgePage } from './imatge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImatgePageRoutingModule
  ],
  declarations: [ImatgePage]
})
export class ImatgePageModule {}
