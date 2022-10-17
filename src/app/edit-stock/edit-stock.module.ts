import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditStockPageRoutingModule } from './edit-stock-routing.module';

import { EditStockPage } from './edit-stock.page';
import { ComponentModule } from '../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditStockPageRoutingModule,
    ComponentModule
  ],
  declarations: [EditStockPage]
})
export class EditStockPageModule {}
