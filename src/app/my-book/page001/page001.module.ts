import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page001PageRoutingModule } from './page001-routing.module';

import { Page001Page } from './page001.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page001PageRoutingModule
  ],
  declarations: [Page001Page]
})
export class Page001PageModule {}
