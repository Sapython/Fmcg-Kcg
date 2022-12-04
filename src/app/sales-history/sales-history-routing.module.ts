import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/guards/auth.guard';

import { SalesHistoryPage } from './sales-history.page';

const routes: Routes = [
  {
    path: '',
    component: SalesHistoryPage,
    children:[
    ]
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'sale',
    loadChildren: () => import('./sale/sale.module').then( m => m.SalePageModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesHistoryPageRoutingModule {}
