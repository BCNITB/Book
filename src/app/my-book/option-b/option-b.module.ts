import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionBPageRoutingModule } from './option-b-routing.module';

import { OptionBPage } from './option-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionBPageRoutingModule
  ],
  declarations: [OptionBPage]
})
export class OptionBPageModule {}
