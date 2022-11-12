import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AddPurchasePageRoutingModule } from './add-purchase-routing.module';

import { AddPurchasePage } from './add-purchase.page';
import { ComponentModule } from '../component/component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddPurchasePageRoutingModule,
    ComponentModule
  ],
  declarations: [AddPurchasePage]
})
export class AddPurchasePageModule {}
