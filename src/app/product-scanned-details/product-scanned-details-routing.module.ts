import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductScannedDetailsPage } from './product-scanned-details.page';

const routes: Routes = [
  {
    path: '',
    component: ProductScannedDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductScannedDetailsPageRoutingModule {}
