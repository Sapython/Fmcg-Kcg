import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomepagePageRoutingModule } from './homepage-routing.module';

import { HomepagePage } from './homepage.page';
import { MostSoldCardComponent } from '../most-sold-card/most-sold-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomepagePageRoutingModule
  ],
  declarations: [HomepagePage, MostSoldCardComponent]
})
export class HomepagePageModule {}
