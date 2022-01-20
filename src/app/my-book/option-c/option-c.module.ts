import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionCPageRoutingModule } from './option-c-routing.module';

import { OptionCPage } from './option-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionCPageRoutingModule
  ],
  declarations: [OptionCPage]
})
export class OptionCPageModule {}
