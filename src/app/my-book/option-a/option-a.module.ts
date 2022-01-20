import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionAPageRoutingModule } from './option-a-routing.module';

import { OptionAPage } from './option-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionAPageRoutingModule
  ],
  declarations: [OptionAPage]
})
export class OptionAPageModule {}
