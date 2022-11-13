import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalsPage } from './modals.page';

const routes: Routes = [
  {
    path: '',
    component: ModalsPage
  },
  {
    path: 'detail/:modalId',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalsPageRoutingModule {}
