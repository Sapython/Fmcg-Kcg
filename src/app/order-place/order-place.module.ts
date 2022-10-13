import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderPlacePageRoutingModule } from './order-place-routing.module';

import { OrderPlacePage } from './order-place.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderPlacePageRoutingModule
  ],
  declarations: [OrderPlacePage]
})
export class OrderPlacePageModule {}
