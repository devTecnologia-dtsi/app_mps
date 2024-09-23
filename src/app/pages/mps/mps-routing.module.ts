import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MpsPage } from './mps.page';

const routes: Routes = [
  {
    path: '',
    component: MpsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MpsPageRoutingModule {}
