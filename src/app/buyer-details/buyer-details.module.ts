import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyerDetailsPageRoutingModule } from './buyer-details-routing.module';

import { BuyerDetailsPage } from './buyer-details.page';
import { SalesCardComponent } from '../sales-card/sales-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyerDetailsPageRoutingModule
  ],
  declarations: [BuyerDetailsPage, SalesCardComponent]
})
export class BuyerDetailsPageModule {}
