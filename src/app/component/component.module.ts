import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesCardComponent } from './sales-card/sales-card.component';
import { RouterModule } from '@angular/router';
import { StockListCardComponent } from './stock-list-card/stock-list-card.component';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { NotificationCardComponent } from './notification-card/notification-card.component';


@NgModule({
  declarations: [SalesCardComponent,StockListCardComponent, HeaderComponent,NotificationCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
    
  ],
  exports: [SalesCardComponent,StockListCardComponent,HeaderComponent,NotificationCardComponent]
})
export class ComponentModule { }
