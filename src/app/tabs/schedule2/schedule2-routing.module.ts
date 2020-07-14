import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Schedule2Page } from './schedule2.page';

const routes: Routes = [
  {
    path: '',
    component: Schedule2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Schedule2PageRoutingModule {}
