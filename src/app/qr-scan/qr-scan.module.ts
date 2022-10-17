import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrScanPageRoutingModule } from './qr-scan-routing.module';

import { QrScanPage } from './qr-scan.page';
import { ComponentModule } from '../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrScanPageRoutingModule,
    ComponentModule
  ],
  declarations: [QrScanPage]
})
export class QrScanPageModule {}
