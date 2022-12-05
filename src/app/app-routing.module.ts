import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./User/login/login.module').then( m => m.LoginPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'flash-screen',
    loadChildren: () => import('./flash-screen/flash-screen.module').then( m => m.FlashScreenPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'get-started',
    loadChildren: () => import('./get-started/get-started.module').then( m => m.GetStartedPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./User/sign-up/sign-up.module').then( m => m.SignUpPageModule),
    canActivate: [LoginGuard]
    // canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./User/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'add-stock',
    loadChildren: () => import('./add-stock/add-stock.module').then( m => m.AddStockPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'qr-page',
    loadChildren: () => import('./qr-page/qr-page.module').then( m => m.QrPagePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-stock/:id',
    loadChildren: () => import('./edit-stock/edit-stock.module').then( m => m.EditStockPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./User/forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'email-verification',
    loadChildren: () => import('./User/email-verification/email-verification.module').then( m => m.EmailVerificationPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'stock-list',
    loadChildren: () => import('./stock-list/stock-list.module').then( m => m.StockListPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'sales-history',
    loadChildren: () => import('./sales-history/sales-history.module').then( m => m.SalesHistoryPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'product-details/:id',
    loadChildren: () => import('./product-details/product-details.module').then( m => m.ProductDetailsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'order-place',
    loadChildren: () => import('./order-place/order-place.module').then( m => m.OrderPlacePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'buyers-list',
    loadChildren: () => import('./buyers-list/buyers-list.module').then( m => m.BuyersListPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'buyer-details',
    loadChildren: () => import('./buyer-details/buyer-details.module').then( m => m.BuyerDetailsPageModule),
    canActivate: [AuthGuard]
  },
  
  {
    path: 'billing/:id',
    loadChildren: () => import('./billing/billing.module').then( m => m.BillingPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'qr-scan',
    loadChildren: () => import('./qr-scan/qr-scan.module').then( m => m.QrScanPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'printer-settings',
    loadChildren: () => import('./printer-settings/printer-settings.module').then( m => m.PrinterSettingsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'add-purchase',
    loadChildren: () => import('./add-purchase/add-purchase.module').then( m => m.AddPurchasePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'root',
    loadChildren: () => import('./root/root.module').then( m => m.RootPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'product-scanned-details:/scannedId',
    loadChildren: () => import('./product-scanned-details/product-scanned-details.module').then( m => m.ProductScannedDetailsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'purchases',
    loadChildren: () => import('./purchases/purchases.module').then( m => m.PurchasesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'purchase-detail/:id',
    loadChildren: () => import('./purchase-detail/purchase-detail.module').then( m => m.PurchaseDetailPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'loading',
    loadChildren: () => import('./loading/loading.module').then( m => m.LoadingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
