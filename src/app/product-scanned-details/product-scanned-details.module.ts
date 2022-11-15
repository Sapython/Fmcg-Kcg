import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductScannedDetailsPageRoutingModule } from './product-scanned-details-routing.module';

import { ProductScannedDetailsPage } from './product-scanned-details.page';
import { ComponentModule } from '../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductScannedDetailsPageRoutingModule,
    ComponentModule
  ],
  declarations: [ProductScannedDetailsPage]
})
export class ProductScannedDetailsPageModule {}
