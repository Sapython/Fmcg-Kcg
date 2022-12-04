import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalePageRoutingModule } from './sale-routing.module';

import { SalePage } from './sale.page';
import { ComponentModule } from '../../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    SalePageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SalePage]
})
export class SalePageModule {}
