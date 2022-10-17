import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrPagePageRoutingModule } from './qr-page-routing.module';

import { QrPagePage } from './qr-page.page';
import { ComponentModule } from '../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrPagePageRoutingModule,
    ComponentModule
  ],
  declarations: [QrPagePage]
})
export class QrPagePageModule {}
