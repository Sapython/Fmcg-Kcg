import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyersListPage } from './buyers-list.page';

const routes: Routes = [
  {
    path: '',
    component: BuyersListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyersListPageRoutingModule {}
