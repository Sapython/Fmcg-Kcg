import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchaseDetailPageRoutingModule } from './purchase-detail-routing.module';

import { PurchaseDetailPage } from './purchase-detail.page';
import { ComponentModule } from '../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchaseDetailPageRoutingModule,
    ComponentModule
  ],
  declarations: [PurchaseDetailPage]
})
export class PurchaseDetailPageModule {}
