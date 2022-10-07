import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlashScreenPageRoutingModule } from './flash-screen-routing.module';

import { FlashScreenPage } from './flash-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlashScreenPageRoutingModule
  ],
  declarations: [FlashScreenPage]
})
export class FlashScreenPageModule {}
