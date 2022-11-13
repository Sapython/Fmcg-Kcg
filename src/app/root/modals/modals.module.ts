import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalsPageRoutingModule } from './modals-routing.module';

import { ModalsPage } from './modals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModalsPage]
})
export class ModalsPageModule {}
