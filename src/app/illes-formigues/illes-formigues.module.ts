import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IllesFormiguesPageRoutingModule } from './illes-formigues-routing.module';

import { IllesFormiguesPage } from './illes-formigues.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IllesFormiguesPageRoutingModule
  ],
  declarations: [IllesFormiguesPage]
})
export class IllesFormiguesPageModule {}
