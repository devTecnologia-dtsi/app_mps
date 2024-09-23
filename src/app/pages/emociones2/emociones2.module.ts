import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Emociones2PageRoutingModule } from './emociones2-routing.module';

import { Emociones2Page } from './emociones2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Emociones2PageRoutingModule
  ],
  declarations: [Emociones2Page]
})
export class Emociones2PageModule {}
