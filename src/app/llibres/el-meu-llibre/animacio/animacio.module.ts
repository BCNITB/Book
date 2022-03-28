import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimacioPageRoutingModule } from './animacio-routing.module';

import { AnimacioPage } from './animacio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimacioPageRoutingModule
  ],
  declarations: [AnimacioPage]
})
export class AnimacioPageModule {}
