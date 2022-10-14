import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'homepage',
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
  },
  {
    path: 'add-stock',
    loadChildren: () => import('./add-stock/add-stock.module').then( m => m.AddStockPageModule)
  },
  {
    path: 'qr-page',
    loadChildren: () => import('./qr-page/qr-page.module').then( m => m.QrPagePageModule)
  },
  {
    path: 'edit-stock/:id',
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
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'sales-history',
    loadChildren: () => import('./sales-history/sales-history.module').then( m => m.SalesHistoryPageModule)
  },
  {
    path: 'product-details/:id',
    loadChildren: () => import('./product-details/product-details.module').then( m => m.ProductDetailsPageModule)
  },
  {
    path: 'order-place',
    loadChildren: () => import('./order-place/order-place.module').then( m => m.OrderPlacePageModule)
  },
  {
    path: 'buyers-list',
    loadChildren: () => import('./buyers-list/buyers-list.module').then( m => m.BuyersListPageModule)
  },
  {
    path: 'buyer-details',
    loadChildren: () => import('./buyer-details/buyer-details.module').then( m => m.BuyerDetailsPageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'billing/:id',
    loadChildren: () => import('./billing/billing.module').then( m => m.BillingPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
