import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrinterSettingsPageRoutingModule } from './printer-settings-routing.module';

import { PrinterSettingsPage } from './printer-settings.page';
import { ComponentModule } from '../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrinterSettingsPageRoutingModule,
    ComponentModule
  ],
  declarations: [PrinterSettingsPage]
})
export class PrinterSettingsPageModule {}
