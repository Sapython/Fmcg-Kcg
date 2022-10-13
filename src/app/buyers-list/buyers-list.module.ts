import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyersListPageRoutingModule } from './buyers-list-routing.module';

import { BuyersListPage } from './buyers-list.page';
import { BuyersCardComponent } from '../buyers-card/buyers-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyersListPageRoutingModule
  ],
  declarations: [BuyersListPage, BuyersCardComponent]
})
export class BuyersListPageModule {}
