import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillingPageRoutingModule } from './billing-routing.module';

import { BillingPage } from './billing.page';
import { ComponentModule } from '../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentModule,
    BillingPageRoutingModule
  ],
  declarations: [BillingPage]
})
export class BillingPageModule {}
