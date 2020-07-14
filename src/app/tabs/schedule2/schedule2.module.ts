import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Schedule2PageRoutingModule } from './schedule2-routing.module';

import { Schedule2Page } from './schedule2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Schedule2PageRoutingModule
  ],
  declarations: [Schedule2Page]
})
export class Schedule2PageModule {}
