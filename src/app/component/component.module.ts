import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesCardComponent } from './sales-card/sales-card.component';
import { RouterModule } from '@angular/router';
import { StockListCardComponent } from './stock-list-card/stock-list-card.component';



@NgModule({
  declarations: [SalesCardComponent,StockListCardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SalesCardComponent,StockListCardComponent]
})
export class ComponentModule { }
