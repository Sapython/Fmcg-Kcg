import { Component, OnInit } from '@angular/core';
import { Auth, authState, User } from '@angular/fire/auth';
import { Firestore, collectionSnapshots, collection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { EMPTY, Observable, Subject } from 'rxjs';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { urls } from 'src/services/url';
import { UserService } from 'src/services/User/user.service';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Camera } from '@capacitor/camera';
import { PushNotifications } from '@capacitor/push-notifications';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(public dataProvider: DataProviderService, public fs: Firestore, public user:UserService,private router:Router, public auth: Auth,private platform: Platform,private alertify:AlertsAndNotificationsService) { 
    if(platform.is('capacitor')){
      Camera.checkPermissions().then((res)=>{
        res.camera === 'prompt' ? Camera.requestPermissions({permissions:['camera','photos']}) : null
      })
      PushNotifications.checkPermissions().then((res)=>{
        if (res.receive == 'granted'){
          PushNotifications.register().then((res)=>{
            
          });
          PushNotifications.addListener('registration',(data)=>{
            console.log("TOKEN: ",data.value);
          })
          PushNotifications.addListener('registrationError',(data)=>{
            console.log("TOKEN: ",data.error);
          })
        } else {
          PushNotifications.requestPermissions().then((res)=>{
            if (res.receive == 'granted'){

            } else {
              this.alertify.presentToast('Push notifications are not allowed','error')
            }
          })
        }
      })
    }
   
    GoogleAuth.initialize({
      clientId: '690627613189-fglnifb9ggsg8qgrb1s17otedqhfm08h.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });


    this.platform.backButton.subscribe(async (res:any)=>{
      if(this.router.url.startsWith('/stock-list') || this.router.url.startsWith('/root/homepage')){
        (document.querySelector('app-root') as HTMLElement).style.display = 'block';
        BarcodeScanner.showBackground();
        await BarcodeScanner.stopScan()
      }
      window.history.back();
    })
    this.dataProvider.loading=true;
    this.user.loggedInUserData.subscribe((data:any)=>{
      console.log("LOADING",data)
      if(data){
        this.router.navigate(['./root'])
      } else {
        this.router.navigate(['./login'])
      }
      this.dataProvider.loading=false;
    })
  }

}
