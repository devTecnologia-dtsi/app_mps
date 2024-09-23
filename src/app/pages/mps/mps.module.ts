import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MpsPageRoutingModule } from './mps-routing.module';

import { MpsPage } from './mps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MpsPageRoutingModule
  ],
  declarations: [MpsPage]
})
export class MpsPageModule {}
