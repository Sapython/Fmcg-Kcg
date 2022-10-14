import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillingPageRoutingModule } from './billing-routing.module';

import { BillingPage } from './billing.page';
import { StockListCardComponent } from '../stock-list/stock-list-card/stock-list-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BillingPageRoutingModule
  ],
  declarations: [BillingPage,StockListCardComponent]
})
export class BillingPageModule {}
