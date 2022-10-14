import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyerDetailsPageRoutingModule } from './buyer-details-routing.module';

import { BuyerDetailsPage } from './buyer-details.page';
import { ComponentModule } from '../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BuyerDetailsPageRoutingModule
  ],
  declarations: [BuyerDetailsPage]
})
export class BuyerDetailsPageModule {}
