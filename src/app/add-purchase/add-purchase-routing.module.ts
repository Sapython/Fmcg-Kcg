import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPurchasePage } from './add-purchase.page';

const routes: Routes = [
  {
    path: '',
    component: AddPurchasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPurchasePageRoutingModule {}
