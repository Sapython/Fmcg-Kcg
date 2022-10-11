import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./User/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'flash-screen',
    loadChildren: () => import('./flash-screen/flash-screen.module').then( m => m.FlashScreenPageModule)
  },
  {
    path: 'get-started',
    loadChildren: () => import('./get-started/get-started.module').then( m => m.GetStartedPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./User/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./User/profile/profile.module').then( m => m.ProfilePageModule)
  },  {
    path: 'add-stock',
    loadChildren: () => import('./add-stock/add-stock.module').then( m => m.AddStockPageModule)
  },
  {
    path: 'qr-page',
    loadChildren: () => import('./qr-page/qr-page.module').then( m => m.QrPagePageModule)
  },
  {
    path: 'edit-stock',
    loadChildren: () => import('./edit-stock/edit-stock.module').then( m => m.EditStockPageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./User/forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  },
  {
    path: 'email-verification',
    loadChildren: () => import('./User/email-verification/email-verification.module').then( m => m.EmailVerificationPageModule)
  },
  {
    path: 'stock-list',
    loadChildren: () => import('./stock-list/stock-list.module').then( m => m.StockListPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
