import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlashScreenPage } from './flash-screen.page';

const routes: Routes = [
  {
    path: '',
    component: FlashScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlashScreenPageRoutingModule {}
