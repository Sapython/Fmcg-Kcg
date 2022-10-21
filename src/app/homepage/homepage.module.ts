import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomepagePageRoutingModule } from './homepage-routing.module';

import { HomepagePage } from './homepage.page';
import { MostSoldCardComponent } from '../most-sold-card/most-sold-card.component';
import { ComponentModule } from '../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    HomepagePageRoutingModule
  ],
  declarations: [HomepagePage, MostSoldCardComponent]
})
export class HomepagePageModule {}
