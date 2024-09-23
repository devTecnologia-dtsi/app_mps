import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstimulacionPage } from './estimulacion.page';

const routes: Routes = [
  {
    path: '',
    component: EstimulacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstimulacionPageRoutingModule {}
