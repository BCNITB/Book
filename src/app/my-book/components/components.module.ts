import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveComponent } from './save/save.component'; 

@NgModule({
  declarations: [
    SaveComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SaveComponent
  ]
})
export class ComponentsModule { }
