import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstimulacionPageRoutingModule } from './estimulacion-routing.module';

import { EstimulacionPage } from './estimulacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstimulacionPageRoutingModule
  ],
  declarations: [EstimulacionPage]
})
export class EstimulacionPageModule {}
