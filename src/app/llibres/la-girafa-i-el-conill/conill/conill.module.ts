import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConillPageRoutingModule } from './conill-routing.module';

import { ConillPage } from './conill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConillPageRoutingModule
  ],
  declarations: [ConillPage]
})
export class ConillPageModule {}
