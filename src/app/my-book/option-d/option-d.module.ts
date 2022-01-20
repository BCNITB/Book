import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionDPageRoutingModule } from './option-d-routing.module';

import { OptionDPage } from './option-d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionDPageRoutingModule
  ],
  declarations: [OptionDPage]
})
export class OptionDPageModule {}
