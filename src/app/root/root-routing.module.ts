import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootPage } from './root.page';

const routes: Routes = [
  {
    path: '',
    component: RootPage,
    children:[
      {
        path: '',
        redirectTo:'homepage',
        pathMatch:'full'
      },
      {
        path: 'homepage',
        loadChildren: () => import('./homepage/homepage.module').then( m => m.HomepagePageModule),
        // canActivate: [AuthGuard]
      },
      {
        path: 'modals',
        loadChildren: () => import('./modals/modals.module').then( m => m.ModalsPageModule)
      },
      {
        path: 'warehouse',
        loadChildren: () => import('./warehouse/warehouse.module').then( m => m.WarehousePageModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RootPageRoutingModule {}
