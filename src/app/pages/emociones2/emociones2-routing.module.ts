import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Emociones2Page } from './emociones2.page';

const routes: Routes = [
  {
    path: '',
    component: Emociones2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Emociones2PageRoutingModule {}
