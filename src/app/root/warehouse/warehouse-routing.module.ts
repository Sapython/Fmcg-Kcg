import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WarehousePage } from './warehouse.page';

const routes: Routes = [
  {
    path: '',
    component: WarehousePage
  },
  {
    path: 'detail/:warehouseId',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WarehousePageRoutingModule {}
