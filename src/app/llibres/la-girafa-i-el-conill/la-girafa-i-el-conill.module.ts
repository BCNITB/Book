import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaGirafaIElConillPageRoutingModule } from './la-girafa-i-el-conill-routing.module';

import { LaGirafaIElConillPage } from './la-girafa-i-el-conill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaGirafaIElConillPageRoutingModule
  ],
  declarations: [LaGirafaIElConillPage]
})
export class LaGirafaIElConillPageModule {}
